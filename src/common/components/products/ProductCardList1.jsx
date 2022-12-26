import React, { Fragment } from "react"; 
import { Grid, Pagination } from "@mui/material";

import FlexBetween from "../flexbox/FlexBetween";
import ProductCard1 from "./product-card/ProductCard1";
import { Span } from "../Typography";

const ProductCard1List = ({productResults, handleCurrentlyPage, totalPages, totalLength, page}) => {
  let pageLength = productResults?.length;

  return (
    <Fragment>
      <Grid container spacing={3}>
        {productResults?.map((item) => (
          <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <ProductCard1 {...item} />
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
    </Fragment>
  );
};

export default ProductCard1List;
