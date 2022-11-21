import React, { Fragment } from "react"; 
import { Grid, Pagination } from "@mui/material";

import FlexBetween from "../../../../common/components/flexbox/FlexBetween";
import { Span } from "../../../../common/components/Typography";
import ProductCard from "./ProductCard";
import { useFilterProducts } from "../hooks/useFilterProducts";


const ProductCardList = () => {

  const { productResult, totalPages, handleCurrentlyPage, page, totalLength} = useFilterProducts();
  return (
    <Fragment>
      <Grid container spacing={3}>
        {productResult?.results?.map((product) => (
          <Grid item lg={4} sm={6} xs={12} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>

      <FlexBetween flexWrap="wrap" mt={4}>
          <Span color="grey.600">Mostrando {productResult?.results?.length} de {totalLength} Resultados</Span>
        <Pagination count={totalPages} variant="outlined" color="primary" onChange={(e) => handleCurrentlyPage(e.target.textContent)} page={page} hidePrevButton hideNextButton/>
      </FlexBetween>
    </Fragment>
  );
};

export default ProductCardList;
