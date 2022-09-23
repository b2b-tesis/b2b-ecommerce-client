import React from "react";
import { Pagination } from "@mui/material";
import  FlexBetween from "../flexbox/FlexBetween";
import ProductCard9 from "./product-card/ProductCard9";
import productDatabase from "../../data/product-database";
import { Span } from "../Typography"; // ==========================================================

// ==========================================================
const ProductCard9List = () => {
  return (
    <div>
      {productDatabase.slice(95, 104).map((item, ind) => (
        <ProductCard9 key={ind} {...item} />
      ))}

      <FlexBetween flexWrap="wrap" mt={4}>
        <Span color="grey.600">Showing 1-9 of 1.3k Products</Span>
        <Pagination count={10} variant="outlined" color="primary" />
      </FlexBetween>
    </div>
  );
};

export default ProductCard9List;
