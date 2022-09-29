import React, { Fragment } from "react"; 
import { Grid, Pagination } from "@mui/material";

import FlexBetween from "../flexbox/FlexBetween";
import ProductCard1 from "./product-card/ProductCard1";
import { Span } from "../Typography";
import productDatabase from "../../data/product-database";

// ========================================================
const ProductCard1List = ({handleCurrentlyPage, totalPages}) => {
  return (
    <Fragment>
      <Grid container spacing={3}>
        {productDatabase.slice(95, 104).map((item, ind) => (
          <Grid item lg={4} sm={6} xs={12} key={ind}>
            <ProductCard1 {...item} />
          </Grid>
        ))}
      </Grid>

      <FlexBetween flexWrap="wrap" mt={4}>
        <Span color="grey.600">Mostrando 9 de 1.3k Resultados</Span>
        <Pagination count={totalPages} variant="outlined" color="primary" onChange={(e) => handleCurrentlyPage(e.target.textContent)}/>
      </FlexBetween>
    </Fragment>
  );
};

export default ProductCard1List;
