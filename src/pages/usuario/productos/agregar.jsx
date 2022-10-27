import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';
import AddProductView from "../../../modules/User/products/AddProductView";


const AddProductPage = ({categoryProducts}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Agregar Producto" />
      <AddProductView categoryProducts={categoryProducts}/>
    </ShopLayout>
  )
}

export const getServerSideProps = async ({req}) => {
  
  let {rucb2b = ''} = req.cookies;
  
  if(rucb2b === '' || !rucb2b ){ 
    return {
      redirect: {
        destination: `/login?p=/usuario/productos/agregar`,
          permanent: false,
        }
      }
    }
    
    let categoryProducts = {};
    try{
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/product-category?ruc=${rucb2b}&limit=15&page=1`);
      const {results} = data.data;
      categoryProducts = results;
    } catch(err){
      return {
        redirect: {
          destination: '/login?p=/usuario/productos/agregar',
          permanent: false,
        }
      }
    }

  return {
    props: {
      categoryProducts
    }
  }
}


export default AddProductPage;