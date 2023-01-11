import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Grid, MenuItem, TextField } from "@mui/material";

import BazaarAvatar from "../../common/components/BazaarAvatar";
import BazaarRating from "../../common/components/BazaarRating";
import BazaarButton from "../../common/components/BazaarButton";
import LazyImage from "../../common/components/LazyImage";
import FlexBox from "../../common/components/flexbox/FlexBox";
import FlexRowCenter from "../../common/components/flexbox/FlexRowCenter";
import { H1, H2, H6 } from "../../common/components/Typography";
import { useAddToCart } from "./hooks/useAddToCart";

const ProductIntro = ({product}) => {
  const { id, name, is_available, is_unlimited, picture, pictures, price, product_category_name, rated, stock, user_name, user_ruc} = product;
  const [selectedImage, setSelectedImage] = useState(0);

  const {addProductToCart, quantityProduct, setQuantityProduct} = useAddToCart();
  
  const router = useRouter();
  const routerId = router.query.id;
 
  const imgGroup = [picture, ...pictures];

  const handleImageClick = (ind) => () => {
    setSelectedImage(ind);
  };


  return (
    <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <FlexBox justifyContent="center" mb={6}>
            <LazyImage
              width={300}
              alt={name}
              height={300}
              loading="eager"
              objectFit="contain"
              src={`${process.env.NEXT_PUBLIC_API_URL}/storage/picture/product?filename=${imgGroup[selectedImage]}`}
            />
          </FlexBox>

          <FlexBox overflow="auto">
            {imgGroup.map((url, ind) => (
              <FlexRowCenter
                key={ind}
                width={64}
                height={64}
                minWidth={64}
                bgcolor="white"
                border="1px solid"
                borderRadius="10px"
                ml={ind === 0 ? "auto" : 0}
                style={{
                  cursor: "pointer",
                }}
                onClick={handleImageClick(ind)}
                mr={ind === imgGroup.length - 1 ? "auto" : "10px"}
                borderColor={
                  selectedImage === ind ? "primary.main" : "grey.400"
                }
              >
                <BazaarAvatar src={`${process.env.NEXT_PUBLIC_API_URL}/storage/picture/product?filename=${url}`} variant="square" height={40} />
              </FlexRowCenter>
            ))}
          </FlexBox>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb={2}>{name}</H1>

          <FlexBox alignItems="center" mb={2}>
            <Box>Categoría:</Box>
            <H6 ml={1}>{product_category_name}</H6>
          </FlexBox>

          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Puntuación de compradores:</Box>
            <Box mx={1} lineHeight="1">
              <BazaarRating
                color="warn"
                fontSize="1.25rem"
                value={rated}
                readOnly
              />
            </Box>
          </FlexBox>

          <Box mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              S=/ {price}
            </H2>
            <Box color="inherit">{is_unlimited ? 'Stock ilimitado por compra (Ingrese la cantidad que desee)' : `Stock limitado por compra a ${stock}`}</Box>
          </Box>
            
         {
          is_unlimited ? (
            <FlexBox alignItems="center" mb={2}>
            <Box sx={{marginRight:2}}>Ingrese la cantidad:</Box>
            {/* <TextField placeholder="0" type="number" size="small" fullWidth name="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/> */}
            <TextField placeholder="1" type="number" size="small" name="stock" sx={{maxWidth:70}} onChange={(e) => setQuantityProduct(e.target.value)} value={quantityProduct}/>
        </FlexBox>
          ) : (
            <FlexBox alignItems="center" mb={2}>
              <Box sx={{marginRight:2}}>Cantidad:</Box>
              <TextField
                    select
                    color="primary"
                    size="medium"
                    name="stock"
                    onChange={(e) => setQuantityProduct(e.target.value)}
                    value={quantityProduct}
                  >
                    {Array.from(Array(stock), (e,i)=>i+1)?.map((st) => (
                      <MenuItem key={st} value={st}>{st}</MenuItem>
                    ))}
              </TextField>
          </FlexBox>
          
          )
         }
            <BazaarButton color="primary" variant="contained" sx={{mb: 4.5, px: "1.75rem", height: 40}} onClick={() => addProductToCart(product)} >
              Agregar al Carrito 
            </BazaarButton>
          

          <FlexBox alignItems="center" mb={2}>
            <Box>Vendido por:</Box>
            <Link href={`/usuario/${user_ruc}`}>
              <a>
                <H6 ml={1}>{user_name}</H6>
              </a>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductIntro;
