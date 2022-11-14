import React, { Fragment } from "react"; 
import { Grid, Pagination } from "@mui/material";

import FlexBetween from "../../../../common/components/flexbox/FlexBetween";
import { Span } from "../../../../common/components/Typography";
import ProductCard from "./ProductCard";


const ProductCardList = () => {
  const productDatabase = [{
    price: 250,
    title: "Shahi 21kt Gold Necklace Set",
    imgUrl:
      "/assets/images/products/Fashion/Jewellery/20.Shahi21ktGoldNecklaceSet.png",
    category: "fashion",
    subcategory: "jewellery",
    id: "7043585830841899",
  },
  {
    price: 250,
    title: "Feathers and Beads Bohemian Necklace",
    imgUrl:
      "/assets/images/products/Fashion/Jewellery/21.FeathersandBeadsBohemianNecklace.png",
    category: "fashion",
    subcategory: "jewellery",
    id: "6501489081180665",
  },
  {
    price: 250,
    title: "Red Peacock Tail Earrings",
    imgUrl:
      "/assets/images/products/Fashion/Jewellery/22.RedPeacockTailEarrings.png",
    category: "fashion",
    subcategory: "jewellery",
    id: "20976592953185347",
  },]
  return (
    <Fragment>
      <Grid container spacing={3}>
        {productDatabase?.map((item) => (
          <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <ProductCard {...item} />
          </Grid>
        ))}
      </Grid>

      <FlexBetween flexWrap="wrap" mt={4}>
        {
          <Span color="grey.600">Mostrando 10 Resultados</Span>
        }
        <Pagination count={10} variant="outlined" color="primary" hidePrevButton hideNextButton/>
      </FlexBetween>
    </Fragment>
  );
};

export default ProductCardList;
