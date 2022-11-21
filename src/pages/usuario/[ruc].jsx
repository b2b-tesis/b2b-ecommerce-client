import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from '../../common/components/layouts/ShopLayout';
import SEO from '../../common/components/seo/SEO';
import ProfileRucView from "../../modules/User/profile-ruc/ProfileRucView";


const UserPage = ({userData, productCategories}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Ver Empresa" />
      <ProfileRucView userData={userData} productCategories={productCategories}/>
    </ShopLayout>
  )
}


export const getServerSideProps = async ({params}) => {
  
  const {ruc = ''} = params;

  if(ruc === '' || !ruc ){ 
    return {
      redirect: {
        destination: `/`,
          permanent: false,
        }
      }
    }
    
    let userData = {};
    let productCategories = {};
  try{
    const resp  = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/details?ruc=${ruc}`);
    userData = resp.data.data[0];

   if(resp.status === 200){
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/product-category?ruc=${ruc}&limit=20&page=1`);
    const {results} = data.data;
    productCategories = results;
   }

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
      productCategories,
      userData
    }
  }
}

export default UserPage;