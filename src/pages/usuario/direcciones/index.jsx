import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import AddressesView from "../../../modules/User/addresses/AddressesView";


const AddressesPage = ({userAddresses, isFilled}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Ver Direcciones" />
      <AddressesView addresses={userAddresses} isFilled={isFilled} />
    </ShopLayout>
  )
}

export const getServerSideProps = async ({req}) => {
  
  let {tokenb2b = ''} = req.cookies;
  
  if(tokenb2b === '' || !tokenb2b ){ 
    return {
      redirect: {
        destination: `/login?p=/usuario/direcciones`,
          permanent: false,
        }
      }
    }
    
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    
    let userAddresses = [];
    let isFilled = false;

  try{
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/address`, config);
    userAddresses = data.data
    isFilled = data.data.length > 0;
  } catch(err){
    return {
      redirect: {
          destination: '/login?p=/usuario/direcciones',
          permanent: false,
      }
    }
  }


  return {
    props: {
      userAddresses,
      isFilled
    }
  }
}

export default AddressesPage;