import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';
import EditProductView from "../../../modules/User/products/EditProduct";


const EditProductsPage = ({product, categoryProducts}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Editar Producto" />
      <EditProductView product={product} categoryProducts={categoryProducts}/>
      
    </ShopLayout>
  )
}

export const getServerSideProps = async ({params, req}) => {

  const {id = ''} = params;
  let {rucb2b = ''} = req.cookies;

  if(rucb2b === '' || !rucb2b ){ 
    return {
      redirect: {
        destination: `/login?p=/usuario/productos/${id}`,
          permanent: false,
        }
      }
    }
    
    
  let product = {};
  let categoryProducts = {};

  try{
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`);
    product  = data.data.results;

  } catch(err){
    return {
      redirect: {
          destination: `/login?p=/usuario/productos/${id}`,
          permanent: false,
      }
    }
  }

  const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/product-category?ruc=${rucb2b}&limit=15&page=1`);
  const {results} = data.data;
  categoryProducts = results;

  return {
    props: {
      product,
      categoryProducts
    }
  }
}

export default EditProductsPage;