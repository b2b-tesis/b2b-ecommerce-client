import { useTheme } from "@mui/styles";

import ShopLayout from '../../common/components/layouts/ShopLayout';
import SEO from '../../common/components/seo/Seo';
import CategoryView from "../../modules/Category/CategoryView";



const CategoryPage = ({id}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Categoría" />
      <CategoryView id={id}/>
    </ShopLayout>
  )
}

export const getServerSideProps = async ({params}) => {
  
  const {id = ''} = params;

  if ( id.length === 0 ) {
    return {
        redirect: {
            destination: '/',
            permanent: true
        }
    }
  }

  return {
    props: {
      id
    }
  }
}


export default CategoryPage;