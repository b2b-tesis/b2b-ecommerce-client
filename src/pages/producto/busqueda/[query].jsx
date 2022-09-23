import { useTheme } from "@mui/styles";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/Seo';
import SearchView from '../../../modules/Search/SearchView';



const SearchPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Búsqueda" />
      <SearchView/>
    </ShopLayout>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    
//     const { query = '' } = params as { query: string };

//     if ( query.length === 0 ) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: true
//             }
//         }
//     }

//     // y no hay productos
//     let products = await dbProducts.getProductsByTerm( query );
//     const foundProducts = products.length > 0;

//     if ( !foundProducts ) {
//         products = await dbProducts.getProductsByTerm('shirt');
//     }

//     return {
//         props: {
//             products,
//             foundProducts,
//             query
//         }
//     }
// }


export default SearchPage;