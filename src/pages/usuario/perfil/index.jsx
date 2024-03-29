import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import ProfileView from "../../../modules/User/profile/ProfileView";



const ProfilePage = ({userData}) => {
  const theme = useTheme();

  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Ver Perfil" />
      <ProfileView userData={userData}/>
    </ShopLayout>
  )
}


export const getServerSideProps = async ({req}) => {
  
  let {tokenb2b = ''} = req.cookies;
  
  if(tokenb2b === '' || !tokenb2b ){ 
    return {
      redirect: {
        destination: `/login?p=/usuario/perfil`,
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
          destination: '/login?p=/usuario/perfil',
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


export default ProfilePage;