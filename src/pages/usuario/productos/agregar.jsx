import { useTheme } from "@mui/styles";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';
import AddProductView from "../../../modules/User/products/AddProductView";


const AddProductPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Agregar Producto" />
      <AddProductView/>
    </ShopLayout>
  )
}

export default AddProductPage;