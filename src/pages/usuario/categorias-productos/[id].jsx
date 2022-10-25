import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';
import EditCategoryProductsView from "../../../modules/User/category-products/EditCategoryProductsView";


const EditCategoryProductsPage = ({categoryProduct}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Editar Categoria de Productos" />
      <EditCategoryProductsView categoryProduct={categoryProduct}/>
    </ShopLayout>
  )
}

export const getServerSideProps = async ({params}) => {

  const {id = ''} = params;    
  let categoryProduct = {};

  try{
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/product-category/${id}`);
    categoryProduct = data;
  } catch(err){
    return {
      redirect: {
          destination: `/login?p=/usuario/categorias-productos/${id}`,
          permanent: false,
      }
    }
  }

  return {
    props: {
      categoryProduct
    }
  }
}

export default EditCategoryProductsPage;