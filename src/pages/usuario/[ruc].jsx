import { useTheme } from "@mui/styles";

import ShopLayout from '../../common/components/layouts/ShopLayout';
import SEO from '../../common/components/seo/SEO';
import ProfileRucView from "../../modules/User/profile-ruc/ProfileRucView";


const UserPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Ver Empresa" />
      <ProfileRucView/>
    </ShopLayout>
  )
}


// export const getServerSideProps = async ({params}) => {
  
//   const {query = ''} = params;

//   if ( query.length === 0 ) {
//     return {
//         redirect: {
//             destination: '/',
//             permanent: true
//         }
//     }
//   }

//   return {
//     props: {
//       query
//     }
//   }
// }

export default UserPage;