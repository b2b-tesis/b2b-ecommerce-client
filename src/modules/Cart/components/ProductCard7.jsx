import React from "react";
import { Close } from "@mui/icons-material";
import { Button, Card, IconButton, styled } from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Image from "../../../common/components/BazaarImage";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import { Span } from "../../../common/components/Typography";
import { deleteProductCart } from "../../../common/state/cart/cartSlice";

const Wrapper = styled(Card)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  position: "relative",
  borderRadius: "10px",
  marginBottom: "1.5rem",
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,
  "@media only screen and (max-width: 425px)": {
    flexWrap: "wrap",
    img: {
      height: "auto",
      minWidth: "100%",
    },
  },
})); 

const ProductCard7 = ({product, cart}) => {
  const {id, name, picture, price} = product;
  const quantity = cart.filter((prod) =>  prod.idProduct === id);
  const router = useRouter();
  const dispatch = useDispatch();

  const deleteProduct = (idProduct) => {
    dispatch(deleteProductCart(idProduct));
    router.reload();
  }

  return (
    <Wrapper>
      <Image
        alt={name}
        width={140}
        height={140}
        display="block"
        src={`${process.env.NEXT_PUBLIC_API_URL}/storage/picture/product?filename=${picture}`}
      />

      <IconButton
        size="small"
        onClick={() => deleteProduct(id)}
        sx={{
          position: "absolute",
          right: 15,
          top: 15,
        }}
      >
        <Close fontSize="small" />
      </IconButton>

      <FlexBox p={2} rowGap={2} width="100%" flexDirection="column">

        <FlexBox gap={1} flexWrap="wrap" alignItems="center">
          <Span color="grey.600">
            Total del producto: S/.{price} x {quantity[0].quantityProduct} =
          </Span>

          <Span fontWeight={600} color="primary.main">
            S/.{(price * quantity[0].quantityProduct).toFixed(2)}
          </Span>
        </FlexBox>

        <FlexBox alignItems="center">
          <Span mx={1} fontWeight={600} fontSize={15}>
            Cantidad : {quantity[0].quantityProduct}
          </Span>
        </FlexBox>
        <FlexBox alignItems="center">
        <Button
            color="primary"
            sx={{
              p: "5px",
            }}
            variant="outlined"
          >
            <Link href={`/producto/${id}`}>
          <a>
            Editar Cantidad
          </a>
        </Link>
          </Button>
        </FlexBox>
        
      </FlexBox>
    </Wrapper>
  );
};

export default ProductCard7;
