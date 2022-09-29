import {Box, Card, Container, Grid, MenuItem,TextField} from "@mui/material";

import { H5, Paragraph } from "../../common/components/Typography";
import FlexBox from "../../common/components/flexbox/FlexBox";
import ProductCard1List from "../../common/components/products/ProductCardList1";
import { useSearchProduct } from "./hooks/useSearchProduct";


const SearchView = ({search}) => {
  
  const {sortOptions, handleCurrentlyPage, page, totalPages} = useSearchProduct();

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
            <H5>Resultados para " {search} "</H5>
            <Paragraph color="grey.600">48 resultados encontrados</Paragraph>
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
          <Grid item xs={12}>
             <ProductCard1List handleCurrentlyPage={handleCurrentlyPage} totalPages={totalPages}/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SearchView;
