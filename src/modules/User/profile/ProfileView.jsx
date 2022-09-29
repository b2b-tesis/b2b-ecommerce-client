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

const ProfileView = () => {



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
          style={{
            background:
              "url(/assets/images/banners/banner-10.png) center/cover",
          }}
        >
          <Box position="absolute" bottom={20} left={24}>
              <Avatar
                src="/assets/images/faces/propic(9).png"
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
          <span>Comercial Pablito</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            RUC
          </Small>
          <span>23456789101</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Email
          </Small>
          <span>ralfedwards@email.com</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Teléfono
          </Small>
          <span>+1983649392983</span>
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
          <span>Tacna</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Provincia
          </Small>
          <span>Tacna</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Distrito
          </Small>
          <span>Pocollay</span>
        </FlexBox>

        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Categoría
          </Small>
          <span>{getCategoryName(1)}</span>
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
          <span>Esta es una descripcion de ejemplo Esta es una descripcion de ejemplo Esta es una descripcion de ejemplo Esta es una descripcion de ejemplo</span>
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
          <span>Enlace a facebook</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Documento de Términos y Condiciones
          </Small>
          <span>Enlace a terminos y condiciones</span>
        </FlexBox>

      </TableRow>

    </CustomerDashboardLayout>
    </>
  );
};

const infoList = [
  {
    title: "16",
    subtitle: "All Orders",
  },
  {
    title: "02",
    subtitle: "Awaiting Payments",
  },
  {
    title: "00",
    subtitle: "Awaiting Shipment",
  },
  {
    title: "01",
    subtitle: "Awaiting Delivery",
  },
];

export default ProfileView;
