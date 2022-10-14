import React, { useState } from "react";
import { useRouter } from "next/router";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";


import BazaarSwitch from "../../BazaarSwitch";
import FlexBox from "../../flexbox/FlexBox";
import { Paragraph, Small } from "../../Typography";

// import currency from "currency.js";
import {CategoryWrapper, StyledIconButton, StyledTableCell, StyledTableRow} from "../../sales/StyledComponents"; 

const ProductRow = ({ product }) => {
  const { category, name, price, image, brand, id, published } = product; // state

  const router = useRouter();
  const [productPulish, setProductPublish] = useState(published);
  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar
            src={image}
            sx={{
              borderRadius: "8px",
            }}
          />
          <Box>
            <Paragraph>{name}</Paragraph>
            <Small color="grey.600">#{id}</Small>
          </Box>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left">
        <CategoryWrapper>{category}</CategoryWrapper>
      </StyledTableCell>

      <StyledTableCell align="left">
        <Avatar
          src={brand}
          sx={{
            width: 55,
            height: "auto",
            borderRadius: 0,
          }}
        />
      </StyledTableCell>

      <StyledTableCell align="left">
        250
      </StyledTableCell>

      <StyledTableCell align="left">
        <BazaarSwitch
          color="primary"
          checked={productPulish}
          onChange={() => setProductPublish((state) => !state)}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton onClick={() => router.push(`/admin/products/${id}`)}>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ProductRow;
