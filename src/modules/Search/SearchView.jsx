import { useEffect } from "react";
import {Box, Card, CircularProgress, Container, Grid, MenuItem,TextField} from "@mui/material";

import { H2, H5, Paragraph } from "../../common/components/Typography";
import FlexBox from "../../common/components/flexbox/FlexBox";
import ProductCard1List from "../../common/components/products/ProductCardList1";
import { useSearchProduct } from "./hooks/useSearchProduct";


const SearchView = ({searchTerm}) => {
  
  const {searchProduct, searchResult, totalLength,  sortOptions,
     handleCurrentlyPage, totalPages, setPage, page, sort, handleFilter, loading} = useSearchProduct();

  useEffect(() => {
    searchProduct(searchTerm);
  },[searchTerm, page, sort])

  useEffect(() => {
    setPage(1);
  },[searchTerm])

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
            <H5>Resultados para " {searchTerm} "</H5>
            {
              totalLength > 1 &&
              (<Paragraph color="grey.600">{totalLength} resultados encontrados</Paragraph>)
            }
             {
              totalLength === 1 &&
              (<Paragraph color="grey.600">{totalLength} resultado encontrado</Paragraph>)
            }
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
                defaultValue={sortOptions[0].keyFilter}
                onChange={(e) => handleFilter(e.target.value)}
                value={sort}
                sx={{
                  flex: "1 1 0",
                  minWidth: "150px",
                }}
              >
                {sortOptions.map((item) => (
                  <MenuItem value={item.keyFilter} key={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </FlexBox>

          </FlexBox>
        </Card>

        <Grid container spacing={3}>
              <Grid item xs={12}>
                {loading ? (
                  <FlexBox justifyContent="center">
                    <CircularProgress color="primary" size={40}/>
                  </FlexBox>
                  )
                  : 
                  searchResult?.results?.length === 0 ?(<FlexBox justifyContent="center">
                  <H2 mb={3}>No se encontraron resultados</H2>
                </FlexBox>)
                    :
                    (
                       <ProductCard1List productResults={searchResult?.results} handleCurrentlyPage={handleCurrentlyPage} totalPages={totalPages} totalLength={totalLength} page={page}/>
                    )
                   
                  
                }
              </Grid>
        </Grid>
        
      </Container>
    </>
  );
};

export default SearchView;
