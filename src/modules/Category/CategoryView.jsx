import {Box, Card, Container, Grid, MenuItem,TextField, Pagination, CircularProgress} from "@mui/material";

import { H2, H5, Paragraph, Span } from "../../common/components/Typography";
import FlexBox from "../../common/components/flexbox/FlexBox";
import ShopCard1 from "../../common/components/shop/ShopCard1";
import { useListByUserCategory } from "./hooks/useListUserByCategory";
import FlexBetween from "../../common/components/flexbox/FlexBetween";
import { useEffect } from "react";
import { getCategoryName } from "../../common/helpers/getCategoryName";


const CategoryView = ({id}) => {
  const { searchUsersByCategory, searchResult, totalLength, sortOptions, handleCurrentlyPage, totalPages, setPage, page, sort, handleFilter, loading} = useListByUserCategory();

  let pageLength = searchResult?.results?.length;

  useEffect(() => {
    searchUsersByCategory(id)
  },[id, page, sort])

  useEffect(() => {
    setPage(1);
  },[id])

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
            <H5>Categoría {getCategoryName(id)}</H5>
            {
              totalLength > 1 &&
              (<Paragraph color="grey.600">{totalLength} empresas en esta categoría</Paragraph>)
            }
             {
              totalLength === 1 &&
              (<Paragraph color="grey.600">{totalLength} empresa en esta categoría</Paragraph>)
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
                       <>
                         <Grid container spacing={3}>
                          {searchResult?.results?.map((item, ind) => (
                            <Grid item lg={4} sm={6} xs={12} key={ind}>
                              <ShopCard1 {...item} />
                            </Grid>
                          ))}
                        </Grid> 

                        <FlexBetween flexWrap="wrap" mt={4}>
                        {
                          totalLength > 1 &&
                          <Span color="grey.600">Mostrando {pageLength} de {totalLength} Resultados</Span>
                        }
                        {
                          totalLength === 1 &&
                          <Span color="grey.600">Mostrando {pageLength} de {totalLength} Resultado</Span>
                        }
                          <Pagination count={totalPages} variant="outlined" color="primary" onChange={(e) => handleCurrentlyPage(e.target.textContent)} page={page} hidePrevButton hideNextButton/>
                        </FlexBetween>
                       </>
                    )
                   
                  
                }
              </Grid>
        </Grid>

        
      </Container>
    </>
  );
};

export default CategoryView;
