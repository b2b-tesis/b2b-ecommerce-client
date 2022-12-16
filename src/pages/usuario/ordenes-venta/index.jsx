import { useTheme } from "@mui/styles";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';
import OrdersSalesView from "../../../modules/User/orders-sales/OrdersSalesView";


const OrdersSalePage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Órdenes de Venta" />
      <OrdersSalesView/>
    </ShopLayout>
  )
}

export default OrdersSalePage;