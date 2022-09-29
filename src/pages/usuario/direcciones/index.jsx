import { useTheme } from "@mui/styles";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import AddressesView from "../../../modules/User/addresses/AddressesView";


const AddressesPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Ver Direcciones" />
      <AddressesView/>
    </ShopLayout>
  )
}


export default AddressesPage;