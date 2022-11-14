import { FilterList } from "@mui/icons-material";
import { Container, Grid, IconButton } from "@mui/material";

import useWindowSize from "../../../common/hooks/useWindowSize";
import ProductCardList from "./components/ProductCardList";
import ProductFilterCard from "./components/ProductFilterCard";
import ShopIntroCard from "./components/ShopIntroCard";
import Sidenav from "./components/Sidenav";

const ProfileRucView = () => {
  const width = useWindowSize();
  const isTablet = width < 961;
  return (
      <Container
        sx={{
          mt: 4,
          mb: 6,
        }}
      >
        <ShopIntroCard />

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
            <ProductFilterCard />
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
                <ProductFilterCard />
              </Sidenav>
            )}

            <ProductCardList />
          </Grid>
        </Grid>
      </Container>
  );
};


export default ProfileRucView;
