import { useTheme } from "@mui/styles";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import ProfileView from "../../../modules/User/profile/ProfileView";



const ProfilePage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Ver Perfil" />
      <ProfileView/>
    </ShopLayout>
  )
}


export default ProfilePage;