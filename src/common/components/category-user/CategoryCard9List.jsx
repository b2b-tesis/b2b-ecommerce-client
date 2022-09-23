import React from "react";
import { Pagination } from "@mui/material";
import  FlexBetween from "../flexbox/FlexBetween";
import CategoryCard9 from "./category-card/CategoryCard9";
import productDatabase from "../../data/product-database";
import { Span } from "../Typography"; // ==========================================================

// ==========================================================
const CategoryCard9List = () => {
  return (
    <div>
      {productDatabase.slice(95, 104).map((item, ind) => (
        <CategoryCard9 key={ind} {...item} />
      ))}

      <FlexBetween flexWrap="wrap" mt={4}>
        <Span color="grey.600">Showing 1-9 of 1.3k Products</Span>
        <Pagination count={10} variant="outlined" color="primary" />
      </FlexBetween>
    </div>
  );
};

export default CategoryCard9List;
