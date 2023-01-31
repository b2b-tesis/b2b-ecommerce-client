import Link from "next/link";
import Person from "@mui/icons-material/Person";
import { Avatar, Box, Button } from "@mui/material";

import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";
import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardNavigation from "../../../common/components/layouts/user-dashboard/Navigations";
import TableRow from "../../../common/components/TableRow";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import { Small } from "../../../common/components/Typography";
import { getCategoryName } from "../../../common/helpers/getCategoryName";
import Image from "next/image";

const ProfileView = ({userData}) => {
  const {banner, category_id, department, district, email, name, phone, picture, province, ruc, social_media, terms, description} = userData;

  return (
    <>
     <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={Person}
        title="Mi perfil"
        navigation={<CustomerDashboardNavigation />}
        button={
          <Link href="/usuario/perfil/editar" passHref>
            <Button
              color="primary"
              sx={{
                px: 4,
                bgcolor: "primary.light",
              }}
            >
              Editar Perfil
            </Button>
          </Link>
        }
      />

      <Box
          mb={3}
          height="173px"
          overflow="hidden"
          borderRadius="10px"
          position="relative"
          // style={{
          //   background:
          //     "url(/assets/images/banners/banner-10.png) center/cover",
          // }}
        >
           {/* <img src={banner ? `${process.env.NEXT_PUBLIC_API_URL}/storage/picture/user?filename=${banner}` : '/assets/images/banners/banner-10.png'} className='imgBanner'/> */}
           <Image src={banner ? `${process.env.NEXT_PUBLIC_API_URL}/storage/picture/user?filename=${banner}` : '/assets/images/banners/banner-10.png'} className='imgBanner' alt="image"/>
          <Box position="absolute" bottom={20} left={24}>
              <Avatar
                src={picture ? `${process.env.NEXT_PUBLIC_API_URL}/storage/picture/user?filename=${picture}` : '/assets/images/faces/propic(9).png'}
                sx={{
                  width: 80,
                  height: 80,
                  border: "4px solid",
                  borderColor: "grey.100",
                }}
              />
          </Box>
        </Box>

      <TableRow
        sx={{
          p: "0.75rem 1.5rem",
        }}
      >
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Nombre Comercial de la Empresa
          </Small>
          <span>{name}</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            RUC
          </Small>
          <span>{ruc}</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Email
          </Small>
          <span>{email}</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Teléfono
          </Small>
          <span>{phone}</span>
        </FlexBox>

      </TableRow>

        <Box marginTop={5}>
        </Box>

      <TableRow
        sx={{
          p: "0.75rem 1.5rem",
        }}
      >
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Ciudad
          </Small>
          <span>{department}</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Provincia
          </Small>
          <span>{province}</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Distrito
          </Small>
          <span>{district}</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Categoría
          </Small>
          <span>{getCategoryName(category_id)}</span>
        </FlexBox>

      </TableRow>

      <Box marginTop={5}>
        </Box>

      <TableRow
        sx={{
          p: "0.75rem 1.5rem",
        }}
      >
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Descripción
          </Small>
          <span>{!description ? 'Agregue una descripción en Editar Perfil' : description}</span>
        </FlexBox>
      </TableRow>
      
      <Box marginTop={5}>
        </Box>
      
      <TableRow
        sx={{
          p: "0.75rem 1.5rem",
        }}
      >
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Facebook de la empresa
          </Small>
          <span>{ !social_media.facebook ? 'Agregue un enlace en Editar Perfil' : social_media.facebook}</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Documento de Términos y Condiciones
          </Small>
          <span>{ !terms ? 'Agregue un enlace en Editar Perfil' : terms}</span>
        </FlexBox>

      </TableRow>

    </CustomerDashboardLayout>
    </>
  );
};


export default ProfileView;
