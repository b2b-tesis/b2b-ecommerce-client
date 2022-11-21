import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import OrdersDetailView from "../../../modules/User/orders/OrderDetailView";



const OrderDetailPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Detalle de Orden de Compra" />
      <OrdersDetailView/>
    </ShopLayout>
  )
}


export default OrderDetailPage;