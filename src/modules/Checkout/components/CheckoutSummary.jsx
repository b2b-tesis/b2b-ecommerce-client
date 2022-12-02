import React from "react";
import { useSelector } from "react-redux";
import { Box, Divider } from "@mui/material";

import FlexBetween from "../../../common/components/flexbox/FlexBetween";
import { Paragraph, Span } from "../../../common/components/Typography";
import { getTotalPrice } from "../../../common/helpers/getTotalPrice";

const CheckoutSummary = () => {

  const {cart} = useSelector((state) => (state.cart));

  return (
    <Box>
      <Paragraph color="secondary.900" fontWeight={700} mb={2}>
        Resumen de tu orden:
      </Paragraph>

      {cart.map((item) => (
        <FlexBetween mb={1.5} key={item.idProduct}>
          <Paragraph>
            <Span fontWeight="700" fontSize="14px">
              {item.quantityProduct}
            </Span>{" "}
            x {item.name}
          </Paragraph>
          <Paragraph>S/.{item.priceProduct * item.quantityProduct}</Paragraph>
        </FlexBetween>
      ))}

      <Divider
        sx={{
          borderColor: "grey.300",
          my: 3,
        }}
      />

      <FlexBetween mb={0.5}>
        <Paragraph color="grey.600">Subtotal:</Paragraph>
        <Paragraph fontWeight="700">S/.{getTotalPrice(cart)}</Paragraph>
      </FlexBetween>


      <Divider
        sx={{
          borderColor: "grey.300",
          mb: 1,
        }}
      />

      <FlexBetween fontWeight="700" mb={1}>
        <Paragraph>Total:</Paragraph>
        <Paragraph fontWeight="700">S/.{getTotalPrice(cart)}</Paragraph>
      </FlexBetween>
    </Box>
  );
};

const cartList = [
  {
    name: "iPhone 12",
    quantity: 1,
    price: 999,
  },
  {
    name: "iPhone 12 pro",
    quantity: 1,
    price: 1199,
  },
  {
    name: "iPhone 12 pro max",
    quantity: 1,
    price: 1299,
  },
];
export default CheckoutSummary;
