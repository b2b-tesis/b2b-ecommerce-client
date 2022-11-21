import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import OrdersView from "../../../modules/User/orders/OrdersView";



const OrdersPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Ordenes de Compra" />
      <OrdersView/>
    </ShopLayout>
  )
}


export default OrdersPage;