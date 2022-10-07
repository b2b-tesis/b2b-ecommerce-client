import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import EditAddressesView from "../../../modules/User/addresses/EditAddressView";

const AddAddressPage = ({address}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Direcciones" />
      <EditAddressesView address={address}/>
    </ShopLayout>
  )
}

export const getServerSideProps = async ({params, req}) => {

  let {tokenb2b = ''} = req.cookies;
  const {id = ''} = params;
    
  if(tokenb2b === '' || !tokenb2b ){ 
    return {
      redirect: {
        destination: `/login?p=/usuario/direcciones/${id}`,
          permanent: false,
        }
      }
    }
    
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    
    let address = {};

  try{
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/address/${id}`, config);
    address = data.data;
  } catch(err){
    return {
      redirect: {
          destination: `/login?p=/usuario/direcciones/${id}`,
          permanent: false,
      }
    }
  }

  return {
    props: {
      address
    }
  }
}

export default AddAddressPage;