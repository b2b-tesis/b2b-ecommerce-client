import { Pagination } from "@mui/material";
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardSalesLayout from "../../../common/components/layouts/user-dashboard/sales";
import CustomerDashboardNavigationSales from "../../../common/components/layouts/user-dashboard/NavigationsSales";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import TableRow from "../../../common/components/TableRow";
import { useListSaleOrders } from "./hooks/useListSaleOrders";
import OrderRow from "./components/OrderRow";
import { H5 } from "../../../common/components/Typography";


const OrdersSalesView = () => {

  const {ordersResult, totalPages, handleCurrentlyPage, page, totalLength, loading} = useListSaleOrders();

  return (
    
    <>
      <CustomerDashboardSalesLayout>
      <UserDashboardHeader
        icon={ListAltOutlinedIcon}
        title={'Órdenes de Venta'}
        navigation={<CustomerDashboardNavigationSales />}
      />

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

   

    </CustomerDashboardSalesLayout>


    </>
  );
};


export default OrdersSalesView;
