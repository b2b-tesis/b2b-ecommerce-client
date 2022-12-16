import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  MenuItem,
  styled,
  TextField,
} from "@mui/material";

import Carousel from "../../../../common/components/carousel/Carousel";
import BazaarImage from "../../../../common/components/BazaarImage";
import { H1, H2, Paragraph } from "../../../../common/components/Typography";
import { useSelector } from "react-redux";
import BazaarButton from "../../../../common/components/BazaarButton";
import FlexBox from "../../../../common/components/flexbox/FlexBox";
import { useEditAmountProduct } from "../hooks/useEditAmountProduct";

const ContentWrapper = styled(Box)(({ theme }) => ({
  "& .carousel:hover": {
    cursor: "pointer",
    "& .carousel__back-button": {
      opacity: 1,
      left: 10,
    },
    "& .carousel__next-button": {
      opacity: 1,
      right: 10,
    },
  },
  "& .carousel__next-button, & .carousel__back-button": {
    opacity: 0,
    boxShadow: "none",
    transition: "all 0.3s",
    background: "transparent",
    color: theme.palette.primary.main,
    ":disabled": {
      color: theme.palette.grey[500],
    },
    ":hover": {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
  },
  "& .carousel__back-button": {
    left: 0,
  },
  "& .carousel__next-button": {
    right: 0,
  },
}));

const ModalEditProduct = ({ openDialog, handleCloseDialog }) => {
  const { productEdit } = useSelector((state) => state.order);
  const { amount, product } = productEdit;

  const { quantityProduct, setQuantityProduct, editAmountProduct } =
    useEditAmountProduct();

  return (
    <Dialog
      open={openDialog}
      maxWidth={false}
      onClose={handleCloseDialog}
      sx={{
        zIndex: 1501,
      }}
    >
      <DialogContent
        sx={{
          maxWidth: 900,
          width: "100%",
        }}
      >
        <ContentWrapper>
          <Grid container spacing={5}>
            <Grid item md={6} xs={12}>
              <Carousel
                totalSlides={product?.pictures?.length}
                visibleSlides={1}
              >
                {product?.pictures?.map((item, index) => (
                  <BazaarImage
                    key={index}
                    src={`${process.env.NEXT_PUBLIC_API_URL}/storage/picture/product?filename=${item}`}
                    sx={{
                      mx: "auto",
                      width: "100%",
                      objectFit: "contain",
                      height: {
                        sm: 400,
                        xs: 250,
                      },
                    }}
                  />
                ))}
              </Carousel>
            </Grid>

            <Grid item md={6} xs={12} alignSelf="center">
              <H2>{product?.name}</H2>

              <H1 color="primary.main">
                S/.{product?.price} x {amount}
              </H1>

              
                <FlexBox alignItems="center" mb={2}>
                  <Box sx={{ marginRight: 2 }}>Ingrese la nueva cantidad:</Box>

                  <TextField
                    placeholder="1"
                    type="number"
                    size="small"
                    name="stock"
                    sx={{ maxWidth: 70 }}
                    onChange={(e) => setQuantityProduct(e.target.value)}
                    value={quantityProduct}
                  />
                </FlexBox>
             



              <BazaarButton
                color="primary"
                variant="contained"
                sx={{ mb: 4.5, px: "1.75rem", height: 40 }}
                onClick={() => {
                  handleCloseDialog();
                  editAmountProduct(product?.id);
                }}
              >
                Editar Cantidad
              </BazaarButton>
            </Grid>
          </Grid>
        </ContentWrapper>

        <IconButton
          sx={{
            position: "absolute",
            top: 3,
            right: 3,
          }}
          onClick={handleCloseDialog}
        >
          <Close fontSize="small" color="secondary" />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
};

export default ModalEditProduct;
