import { useTheme } from "@mui/styles";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import PaymentCardsView from "../../../modules/User/payment-cards/PaymentCardsView";


const PaymentCardsPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Ver Tarjetas" />
      <PaymentCardsView/>
    </ShopLayout>
  )
}


export default PaymentCardsPage;