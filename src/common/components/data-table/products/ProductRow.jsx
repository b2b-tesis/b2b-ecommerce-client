import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";

import FlexBox from "../../flexbox/FlexBox";
import { Paragraph } from "../../Typography";

import {CategoryWrapper, StyledIconButton, StyledTableCell, StyledTableRow} from "../../sales/StyledComponents"; 
import ModalViewImages from "../../../../modules/User/products/components/ModalViewImages";
import DialogDeleteElement from "../../dialogDeleteElement/DialogDeleteElement";
import { useDeleteProduct } from "../../../../modules/User/products/hooks/useDeleteProduct";

const ProductRow = ({ product }) => {
  const {id, name, is_available, product_category_name, picture, pictures, description, price} = product;
  const {toggleDialog, openDialog, deleteProduct, setIdToDelete} =  useDeleteProduct();



  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => {setOpenModal((open) => !open)}, []);
  const router = useRouter();

  const pictureModal = [picture, ...pictures];

  return (
    <>
      <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar
            src={`${process.env.NEXT_PUBLIC_API_URL}/storage/picture/product?filename=${picture}`}
            sx={{
              borderRadius: "8px",
              cursor:'pointer'
            }}
            // onClick={toggleModal}
          />
          <Box>
            <Paragraph>{name}</Paragraph>
          </Box>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="center">
        <CategoryWrapper sx={is_available ? {backgroundColor:'#91ff78 '} : {backgroundColor:'#ffa5a5'}}>{is_available ? 'Está disponible' : 'No está disponible'}</CategoryWrapper>
      </StyledTableCell>

      <StyledTableCell align="center">
      <CategoryWrapper>{product_category_name}</CategoryWrapper>
      </StyledTableCell>


      <StyledTableCell align="center">
        <StyledIconButton onClick={() => router.push(`/usuario/productos/${id}`)}>
          <Edit />
        </StyledIconButton>

        <StyledIconButton  onClick={() => {toggleDialog(); setIdToDelete(id)}}>
          <Delete/>
        </StyledIconButton>

        <StyledIconButton onClick={toggleModal}>
        <RemoveRedEye/>
        </StyledIconButton>

      </StyledTableCell>
    </StyledTableRow>

    <ModalViewImages
      openDialog={openModal}
      handleCloseDialog={toggleModal}
      pictures={pictureModal}
      name={name}
      price={price}
      description={description}
      category={product_category_name}
      />

  <DialogDeleteElement
        openDialog={openDialog}
        handleCloseDialog={toggleDialog}
        title={'Mis productos'}
        element={name}
        deleteAction={deleteProduct}
      />
    </>
  );
};

export default ProductRow;
