import Link from "next/link";
import { Button } from "@mui/material";
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardSalesLayout from "../../../common/components/layouts/user-dashboard/sales";
import CustomerDashboardNavigationSales from "../../../common/components/layouts/user-dashboard/NavigationsSales";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import { Small } from "../../../common/components/Typography";
import TableRow from "../../../common/components/TableRow";


const CollectMethodView = ({userData}) => {
  return (
    
    <>
      <CustomerDashboardSalesLayout>
      <UserDashboardHeader
        icon={PointOfSaleOutlinedIcon}
        title={'Método para Recibir Pagos'}
        navigation={<CustomerDashboardNavigationSales />}
        button={
          <Link href={"/usuario/productos"} >
            <a>
              <Button
                color="primary"
                sx={{
                  bgcolor: "primary.light",
                  px: "2rem",
                }}
              >
                 Ir a Productos
              </Button>
            </a>
          </Link>
        }
      />


         <TableRow
      sx={{
        p: "0.75rem 1.5rem",
      }}
    >
      <FlexBox flexDirection="column" p={1}>
        <Small color="grey.600" mb={0.5} textAlign="left">
          Método para recibir pagos
        </Small>
        <span>Culqi</span>
      </FlexBox>

      <FlexBox flexDirection="column" p={1}>
        <Small color="grey.600" mb={0.5} textAlign="left">
          LLave Pública
        </Small>
        <span>{userData.public_key}</span>
      </FlexBox>

      <FlexBox flexDirection="column" p={1}>
        <Small color="grey.600" mb={0.5} textAlign="left">
          LLave Privada
        </Small>
        <span>{userData.private_key}</span>
      </FlexBox>


    </TableRow>

   

    </CustomerDashboardSalesLayout>


    </>
  );
};


export default CollectMethodView;
