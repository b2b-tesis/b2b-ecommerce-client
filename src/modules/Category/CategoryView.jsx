import {Box, Card, Container, Grid, MenuItem,TextField, Pagination} from "@mui/material";

import { H5, Paragraph, Span } from "../../common/components/Typography";
import FlexBox from "../../common/components/flexbox/FlexBox";
import ShopCard1 from "../../common/components/shop/ShopCard1";
import { useListByUserCategory } from "./hooks/useListUserByCategory";
import FlexBetween from "../../common/components/flexbox/FlexBetween";


const CategoryView = () => {
const {sortOptions, shopList, handleCurrentlyPage, totalPages} = useListByUserCategory();

  return (
    <>
     <Container
        sx={{
          mt: 4,
          mb: 6,
        }}
      >
        <Card
          elevation={1}
          sx={{
            mb: "55px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            p: {
              sm: "1rem 1.25rem",
              md: "0.5rem 1.25rem",
              xs: "1.25rem 1.25rem 0.25rem",
            },
          }}
        >
          <Box>
            <H5>Categorias</H5>
            <Paragraph color="grey.600">48 empresas en esta categoría</Paragraph>
          </Box>

          <FlexBox
            alignItems="center"
            columnGap={4}
            flexWrap="wrap"
            my="0.5rem"
          >
            <FlexBox alignItems="center" gap={1} flex="1 1 0">
              <Paragraph color="grey.600" whiteSpace="pre">
                Ordenar de:
              </Paragraph>

              <TextField
                select
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Short by"
                defaultValue={sortOptions[0].value}
                sx={{
                  flex: "1 1 0",
                  minWidth: "150px",
                }}
              >
                {sortOptions.map((item) => (
                  <MenuItem value={item.value} key={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </FlexBox>

          </FlexBox>
        </Card>

        <Grid container spacing={3}>
          {shopList.map((item, ind) => (
            <Grid item lg={4} sm={6} xs={12} key={ind}>
              <ShopCard1 {...item} />
            </Grid>
          ))}
        </Grid>

        <FlexBetween flexWrap="wrap" mt={4}>
          <Span color="grey.600">Mostrando 9 de 300 Empresas</Span>
          <Pagination count={totalPages} variant="outlined" color="primary" onChange={(e) => handleCurrentlyPage(e.target.textContent)}/>
        </FlexBetween>
      </Container>
    </>
  );
};

export default CategoryView;
