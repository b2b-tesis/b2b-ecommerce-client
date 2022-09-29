import { useTheme } from "@mui/styles";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import AddPaymentCardView from "../../../modules/User/payment-cards/AddPaymentCardView";

const AddPaymentCardPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Direcciones" />
      <AddPaymentCardView/>
    </ShopLayout>
  )
}


export default AddPaymentCardPage;