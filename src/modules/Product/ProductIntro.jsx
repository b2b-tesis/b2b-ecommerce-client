import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ImageViewer from "react-simple-image-viewer";
import { Add, Remove } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";

import BazaarAvatar from "../../common/components/BazaarAvatar";
import BazaarRating from "../../common/components/BazaarRating";
import BazaarButton from "../../common/components/BazaarButton";
import LazyImage from "../../common/components/LazyImage";
import FlexBox from "../../common/components/flexbox/FlexBox";
import FlexRowCenter from "../../common/components/flexbox/FlexRowCenter";
import { H1, H2, H3, H6 } from "../../common/components/Typography";
import { useAppContext } from "../../common/contexts/AppContext";

const ProductIntro = ({product}) => {
  const { id, name, is_available, is_unlimited, picture, pictures, price, product_category_name, rated, stock, user_name, user_ruc} = product;
  const [selectedImage, setSelectedImage] = useState(0);
  
  const router = useRouter();
  const routerId = router.query.id;
  const { state, dispatch } = useAppContext();
  const cartList = state.cart;
  const cartItem = cartList.find(
    (item) => item.id === id || item.id === routerId
  );
  const imgGroup = [picture, ...pictures];

  const handleImageClick = (ind) => () => {
    setSelectedImage(ind);
  };

  const handleCartAmountChange = useCallback(
    (amount) => () => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          price,
          qty: amount,
          name: title,
          imgUrl: imgGroup[0],
          id: id || routerId,
        },
      });
    },
    []
  );
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
            <Box lineHeight="1">Rated:</Box>
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
              S=/.{price}
            </H2>
            <Box color="inherit">Stock Available</Box>
          </Box>

          {!cartItem?.qty ? (
            <BazaarButton
              color="primary"
              variant="contained"
              onClick={handleCartAmountChange(1)}
              sx={{
                mb: 4.5,
                px: "1.75rem",
                height: 40,
              }}
            >
              Add to Cart
            </BazaarButton>
          ) : (
            <FlexBox alignItems="center" mb={4.5}>
              <BazaarButton
                size="small"
                sx={{
                  p: 1,
                }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty - 1)}
              >
                <Remove fontSize="small" />
              </BazaarButton>

              <H3 fontWeight="600" mx={2.5}>
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>

              <BazaarButton
                size="small"
                sx={{
                  p: 1,
                }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty + 1)}
              >
                <Add fontSize="small" />
              </BazaarButton>
            </FlexBox>
          )}

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
