import React from "react";
import { Box, Divider } from "@mui/material";

import FlexBetween from "../../../common/components/flexbox/FlexBetween";
import { Paragraph, Span } from "../../../common/components/Typography";

const CheckoutSummary = () => {
  return (
    <Box>
      <Paragraph color="secondary.900" fontWeight={700} mb={2}>
        Resumen de tu orden:
      </Paragraph>

      {cartList.map((item) => (
        <FlexBetween mb={1.5} key={item.name}>
          <Paragraph>
            <Span fontWeight="700" fontSize="14px">
              {item.quantity}
            </Span>{" "}
            x {item.name}
          </Paragraph>
          <Paragraph>S/.{item.price.toFixed(2)}</Paragraph>
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
        <Paragraph fontWeight="700">S/.{(2610).toFixed(2)}</Paragraph>
      </FlexBetween>


      <Divider
        sx={{
          borderColor: "grey.300",
          mb: 1,
        }}
      />

      <FlexBetween fontWeight="700" mb={1}>
        <Paragraph>Total:</Paragraph>
        <Paragraph fontWeight="700">S/.{(2610).toFixed(2)}</Paragraph>
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
