import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from '../../common/components/layouts/ShopLayout';
import SEO from '../../common/components/seo/SEO';
import CheckoutView from "../../modules/Checkout/CheckoutView";


const CheckoutPage = ({userAddresses, userPayment}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Verificacion" />
      <CheckoutView userAddresses={userAddresses} userPayment={userPayment}/>
    </ShopLayout>
  )
}

export const getServerSideProps = async ({req}) => {
  
  let {tokenb2b = ''} = req.cookies;
  
  if(tokenb2b === '' || !tokenb2b ){ 
    return {
      redirect: {
        destination: `/login?p=/verificacion`,
          permanent: false,
        }
      }
    }
    
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    
    let userAddresses = [];
    let userPayment = [];

  try{
    const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/address`, config);
    userAddresses = resp.data.data
    if(resp.status === 200){
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/payment-methods`, config);
      userPayment = response.data.data
    }
  } catch(err){
    return {
      redirect: {
          destination: '/login?p=/verificacion',
          permanent: false,
      }
    }
  }


  return {
    props: {
      userAddresses,
      userPayment
    }
  }
}


export default CheckoutPage;