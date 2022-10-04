import { useTheme } from "@mui/styles";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/Seo';
import SearchView from '../../../modules/Search/SearchView';



const SearchPage = ({query}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Búsqueda" />
      <SearchView searchTerm={query}/>
    </ShopLayout>
  )
}


export const getServerSideProps = async ({params}) => {
  
  const {query = ''} = params;

  if ( query.length === 0 ) {
    return {
        redirect: {
            destination: '/',
            permanent: true
        }
    }
  }

  return {
    props: {
      query
    }
  }
}

export default SearchPage;