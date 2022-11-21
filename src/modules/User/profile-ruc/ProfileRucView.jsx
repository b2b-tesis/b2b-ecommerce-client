import { FilterList } from "@mui/icons-material";
import { Container, Grid, IconButton } from "@mui/material";
import NoDataMessage from "../../../common/components/noData-message/NoDataMessage";

import useWindowSize from "../../../common/hooks/useWindowSize";
import ProductCardList from "./components/ProductCardList";
import ProductFilterCard from "./components/ProductFilterCard";
import ShopIntroCard from "./components/ShopIntroCard";
import Sidenav from "./components/Sidenav";
import { useFilterProducts } from "./hooks/useFilterProducts";

const ProfileRucView = ({userData, productCategories}) => {
  const width = useWindowSize();
  const isTablet = width < 961;
  const {productResult} = useFilterProducts();

  return (
      <Container
        sx={{
          mt: 4,
          mb: 6,
        }}
      >
        <ShopIntroCard userData={userData}/>

        <Grid container spacing={3}>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              display: {
                md: "block",
                xs: "none",
              },
            }}
          >
            <ProductFilterCard productCategories={productCategories}/>
          </Grid>

          <Grid item md={9} xs={12}>
            {isTablet && (
              <Sidenav
                position="left"
                handle={
                  <IconButton
                    sx={{
                      float: "right",
                    }}
                  >
                    <FilterList fontSize="small" />
                  </IconButton>
                }
              >
                <ProductFilterCard productCategories={productCategories}/>
              </Sidenav>
            )}              
              {
                productResult?.results?.length > 0 && <ProductCardList />
              }
              {
                productResult?.results?.length === 0 && <NoDataMessage message={'No se encontraron productos'}/>
              }
                
              
            
          </Grid>
        </Grid>
      </Container>
  );
};


export default ProfileRucView;
