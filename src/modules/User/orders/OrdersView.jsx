import { Pagination} from "@mui/material";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";
import CustomerDashboardNavigation from "../../../common/components/layouts/user-dashboard/Navigations";
import TableRow from "../../../common/components/TableRow";
import { H5 } from "../../../common/components/Typography";
import OrderRow from "./components/OrderRow";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import { useListOrders } from "./hooks/useListOrders";
import Loading from "../../../common/components/loadingView/Loading";
import NoDataMessage from "../../../common/components/noData-message/NoDataMessage";

const OrdersView = () => {

  const {ordersResult, totalPages, handleCurrentlyPage, page, totalLength, loading} = useListOrders();

  return (
    <>
      <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={ShoppingBagOutlined}
        title={'Mis Órdenes de Compra'}
        navigation={<CustomerDashboardNavigation />}
      />

{loading
      ? (<Loading/>)
      : (
        
        totalLength >= 1 ? (
          <>
           <TableRow
              elevation={0}
              sx={{
                padding: "0px 18px",
                background: "none",
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
                Estado de la Orden
              </H5>

              <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
                Fecha de Creación
              </H5>

              <H5 color="grey.600" my={0} mx={0.75} textAlign="left">
                Total
              </H5>
              <H5 flex="0 0 0 !important" color="grey.600" px={2.75} my={0} />
            </TableRow>
            
                {ordersResult?.results?.map((item, ind) => (
                  <OrderRow item={item} key={ind} />
                ))}
                        
          
          <FlexBox justifyContent="center" mt={5}>
        <Pagination count={totalPages} variant="outlined" color="primary" onChange={(e) => handleCurrentlyPage(e.target.textContent)} 
           page={page} hidePrevButton hideNextButton
        />
      </FlexBox>
         </>
    
        
      ) : (totalLength === 0 || !totalLength && <NoDataMessage message={'¡Todavía no tienes órdenes guardadas!'}/>)
      
      )
    }

    </CustomerDashboardLayout>


    </>
  );
};

export default OrdersView;
