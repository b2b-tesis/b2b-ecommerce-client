import Link from "next/link";
import { Button} from "@mui/material";
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardSalesLayout from "../../../common/components/layouts/user-dashboard/sales";
import CustomerDashboardNavigationSales from "../../../common/components/layouts/user-dashboard/NavigationsSales";
import EditProductForm from "./components/EditProductForm";

const EditProductView = () => {

  return (
    
    <>
      <CustomerDashboardSalesLayout>
      <UserDashboardHeader
        icon={InventoryOutlinedIcon}
        title={'Editar Producto'}
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
                 Regresar a Productos
              </Button>
            </a>
          </Link>
        }
      />

      <EditProductForm/>



    </CustomerDashboardSalesLayout>


    </>
  );
};


export default EditProductView;
