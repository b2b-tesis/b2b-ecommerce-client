import { useTheme } from "@mui/styles";

import ShopLayout from '../../common/components/layouts/ShopLayout';
import SEO from '../../common/components/seo/Seo';
import CategoryView from "../../modules/Category/CategoryView";



const CategoryPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Categoría | " />
      <CategoryView/>
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


export default CategoryPage;