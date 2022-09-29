import { useTheme } from "@mui/styles";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import AddAddressesView from "../../../modules/User/addresses/AddAddressView";

const AddAddressPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Direcciones" />
      <AddAddressesView/>
    </ShopLayout>
  )
}


export default AddAddressPage;