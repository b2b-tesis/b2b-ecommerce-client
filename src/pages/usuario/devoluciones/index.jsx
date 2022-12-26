import { useTheme } from "@mui/styles";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import RefundsView from "../../../modules/User/refunds/RefundsView";


const OrdersPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Devoluciones de Compras" />
      <RefundsView/>
    </ShopLayout>
  )
}


export default OrdersPage;