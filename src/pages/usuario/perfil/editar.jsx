import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import EditProfileView from "../../../modules/User/profile/EditProfileView";

const EditProfilePage = ({userData}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Editar Perfil" />
      <EditProfileView userData={userData}/>
    </ShopLayout>
  )
}

export const getServerSideProps = async ({req}) => {
  
  let {tokenb2b = ''} = req.cookies;
  
  if(tokenb2b === '' || !tokenb2b ){ 
    return {
      redirect: {
        destination: `/login?p=/usuario/perfil/editar`,
          permanent: false,
        }
      }
    }
    
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    
    let userData = {};
  try{
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`, config);
    const {user} = data.data;
    userData = user;
  } catch(err){
    return {
      redirect: {
          destination: '/login?p=/usuario/perfil/editar',
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

export default EditProfilePage;