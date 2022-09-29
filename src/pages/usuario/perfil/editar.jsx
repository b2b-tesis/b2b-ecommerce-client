import { useTheme } from "@mui/styles";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import EditProfileView from "../../../modules/User/profile/EditProfileView";

const EditProfilePage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Editar Perfil" />
      <EditProfileView/>
    </ShopLayout>
  )
}


export default EditProfilePage;