import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';
import CollectMethodView from "../../../modules/User/collect-method/CollectMethodView";


const CollectPaymentPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Método de Cobro" />
      <CollectMethodView/>
    </ShopLayout>
  )
}

export default CollectPaymentPage;