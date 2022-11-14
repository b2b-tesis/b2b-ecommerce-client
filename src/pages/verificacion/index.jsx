import { useTheme } from "@mui/styles";

import ShopLayout from '../../common/components/layouts/ShopLayout';
import SEO from '../../common/components/seo/SEO';
import CheckoutView from "../../modules/Checkout/CheckoutView";


const CheckoutPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Verificacion" />
      <CheckoutView/>
    </ShopLayout>
  )
}


export default CheckoutPage;