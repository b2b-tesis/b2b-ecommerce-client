import React from "react";
import { useRouter } from "next/router";
import { Delete, Edit } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";

import FlexBox from "../../flexbox/FlexBox";
import { Paragraph, Small } from "../../Typography";

import {CategoryWrapper, StyledIconButton, StyledTableCell, StyledTableRow} from "../../sales/StyledComponents"; 

const ProductRow = ({ product }) => {
  const { category, name, price, image, brand, id, published } = product; // state

  const router = useRouter();

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

      <StyledTableCell align="center">
        <CategoryWrapper>Categoria</CategoryWrapper>
      </StyledTableCell>

      <StyledTableCell align="center">
      <CategoryWrapper>Categoria</CategoryWrapper>
      </StyledTableCell>


      <StyledTableCell align="center">
        <StyledIconButton onClick={() => router.push(`/usuario/productos/${id}`)}>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ProductRow;
