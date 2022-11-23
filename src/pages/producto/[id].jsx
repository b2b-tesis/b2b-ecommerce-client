import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from '../../common/components/layouts/ShopLayout';
import SEO from '../../common/components/seo/SEO';
import ProductView from "../../modules/Product/ProductView";


const ProductPage = ({productData}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Detalle Producto" />
       <ProductView productData={productData}/>
    </ShopLayout>
  )
}

export const getServerSideProps = async ({params}) => {
  
  const {id = ''} = params;

  if(id === '' || !id ){ 
    return {
      redirect: {
        destination: `/`,
          permanent: false,
        }
      }
    }
    
    let productData = {};

  try{
    const resp  = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`);
    productData = resp.data.data.results;
  } catch(err){
    return {
      redirect: {
          destination: '/404',
          permanent: false,
      }
    }
  }
  return {
    props: {
      productData
    }
  }
}

export default ProductPage;