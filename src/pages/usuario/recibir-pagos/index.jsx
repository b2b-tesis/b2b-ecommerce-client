import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';
import CollectMethodView from "../../../modules/User/collect-method/CollectMethodView";


const CollectPaymentPage = ({userData}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Método de Cobro" />
      <CollectMethodView userData={userData}/>
    </ShopLayout>
  )
}

export const getServerSideProps = async ({req}) => {
  
  let {tokenb2b = ''} = req.cookies;
  
  if(tokenb2b === '' || !tokenb2b ){ 
    return {
      redirect: {
        destination: `/login?p=/usuario/recibir-pagos`,
          permanent: false,
        }
      }
    }
    
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    
    let userData = {};
  try{
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/culqi`, config);
    userData = data.data;
  } catch(err){
    return {
      redirect: {
          destination: '/login?p=/usuario/recibir-pagos',
          permanent: false,
      }
    }
  }

  return {
    props: {
      userData
    }
  }
}

export default CollectPaymentPage;