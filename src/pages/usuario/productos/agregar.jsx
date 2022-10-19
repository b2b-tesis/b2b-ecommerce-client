import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from "../../../common/components/layouts/ShopLayout";
import SEO from '../../../common/components/seo/SEO';
import AddProductView from "../../../modules/User/products/AddProductView";


const AddProductPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Agregar Producto" />
      <AddProductView/>
    </ShopLayout>
  )
}

// export const getServerSideProps = async ({req}) => {
  
//   let {tokenb2b = ''} = req.cookies;
  
//   if(tokenb2b === '' || !tokenb2b ){ 
//     return {
//       redirect: {
//         destination: `/login?p=/usuario/direcciones/agregar`,
//           permanent: false,
//         }
//       }
//     }

//     const config = {
//       headers: { Authorization: `Bearer ${tokenb2b}` }
//     };
    
//     try{
//       await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`, config);
//     }catch(err){
//       return {
//         redirect: {
//           destination: `/login?p=/usuario/direcciones/agregar`,
//             permanent: false,
//           }
//         }
//     }
//   return {
//     props: {}
//   }
// }

export default AddProductPage;