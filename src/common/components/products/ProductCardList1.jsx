import React, { Fragment } from "react"; 
import { Grid, Pagination } from "@mui/material";

import FlexBetween from "../flexbox/FlexBetween";
import ProductCard1 from "./product-card/ProductCard1";
import { Span } from "../Typography";
import productDatabase from "../../data/product-database";

// ========================================================
const ProductCard1List = () => {
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
        <Span color="grey.600">Showing 1-9 of 1.3k Products</Span>
        <Pagination count={10} variant="outlined" color="primary" />
      </FlexBetween>
    </Fragment>
  );
};

export default ProductCard1List;
