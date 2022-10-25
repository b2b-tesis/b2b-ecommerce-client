import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';
import EditProductView from "../../../modules/User/products/EditProduct";


const EditProductsPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Editar Producto" />
      <EditProductView/>
      
    </ShopLayout>
  )
}

export default EditProductsPage;