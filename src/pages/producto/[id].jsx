import { useTheme } from "@mui/styles";

import ShopLayout from '../../common/components/layouts/ShopLayout';
import SEO from '../../common/components/seo/SEO';
import ProductView from "../../modules/Product/ProductView";


const ProductPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Detalle Producto" />
       <ProductView/>
    </ShopLayout>
  )
}

export default ProductPage;