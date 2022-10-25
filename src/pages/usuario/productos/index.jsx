import { useTheme } from "@mui/styles";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';
import ProductsView from "../../../modules/User/products/ProductsView";


const ProductsPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Ver Mis Productos" />
      <ProductsView/>
    </ShopLayout>
  )
}

export default ProductsPage;