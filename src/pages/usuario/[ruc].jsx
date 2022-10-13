import { useTheme } from "@mui/styles";

import ShopLayout from '../../common/components/layouts/ShopLayout';
import SEO from '../../common/components/seo/SEO';


const UserPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Búsqueda" />
      {/* <SearchView searchTerm={query}/> */}
      <h1>USer </h1>
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