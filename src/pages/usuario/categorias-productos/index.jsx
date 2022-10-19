import { useTheme } from "@mui/styles";
import axios from "axios";
import CategoryProductsView from "../../../modules/User/category-products/CategoryProductsView";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';


const ProductsPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Categorias de Productos" />
      <CategoryProductsView/>
    </ShopLayout>
  )
}


export default ProductsPage;