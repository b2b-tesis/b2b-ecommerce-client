import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';
import EditCategoryProductsView from "../../../modules/User/category-products/EditCategoryProductsView";


const AddAddressPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Editar Categoria de Productos" />
      <EditCategoryProductsView/>
    </ShopLayout>
  )
}


export default AddAddressPage;