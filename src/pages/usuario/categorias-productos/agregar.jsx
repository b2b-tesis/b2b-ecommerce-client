import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';
import AddCategoryProductsView from "../../../modules/User/category-products/AddCategoryProductsView";


const AddCategoryProductsPage = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Agregar Categorias de Productos" />
     <AddCategoryProductsView/>
    </ShopLayout>
  )
}


export default AddCategoryProductsPage;