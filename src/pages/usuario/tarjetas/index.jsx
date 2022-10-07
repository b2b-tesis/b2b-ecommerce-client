import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import PaymentCardsView from "../../../modules/User/payment-cards/PaymentCardsView";


const PaymentCardsPage = ({userPaymenthMethods, isFilled}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Ver Tarjetas" />
      <PaymentCardsView paymentMethods={userPaymenthMethods} isFilled={isFilled}/>
    </ShopLayout>
  )
}

export const getServerSideProps = async ({req}) => {
let {tokenb2b = ''} = req.cookies;
  
if(tokenb2b === '' || !tokenb2b ){ 
  return {
    redirect: {
      destination: `/login?p=/usuario/tarjetas`,
        permanent: false,
      }
    }
  }
  
  const config = {
    headers: { Authorization: `Bearer ${tokenb2b}` }
  };
  
  let userPaymenthMethods = [];
  let isFilled = false;

try{
  const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/payment-methods`, config);
  userPaymenthMethods = data.data
  isFilled = data.data.length > 0;
} catch(err){
  return {
    redirect: {
        destination: '/login?p=/usuario/tarjetas',
        permanent: false,
    }
  }
}


  return {
    props: {
      userPaymenthMethods,
      isFilled
    }
  }
}

export default PaymentCardsPage;