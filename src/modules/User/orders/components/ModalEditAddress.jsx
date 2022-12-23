import { Close } from "@mui/icons-material";
import {
  Box,
  Card,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  styled,
} from "@mui/material";


import { H2, H6, Paragraph } from "../../../../common/components/Typography";
import BazaarButton from "../../../../common/components/BazaarButton";
import { useEditOrderAddress } from "../hooks/useEditOrderAddress";


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

const ModalEditAddress = ({ openDialog, handleCloseDialog, paymentDetails }) => {

  const {addressResult, address, setAddress, updateAddress, loading3, loading2} = useEditOrderAddress();

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
          <Grid container >
          <H2 mb={5}>Seleccione la dirección donde se enviará su pedido y click en Actualizar Dirección</H2>
            <Grid container spacing={3} justifyContent="center">
              {addressResult?.map((item) => (
                <Grid item md={4} sm={6} xs={12} key={item.id}>
                  <Card
                    sx={{
                      padding: 2,
                      boxShadow: "none",
                      cursor: "pointer",
                      border: "1px solid",
                      position: "relative",
                      backgroundColor: "grey.100",
                      borderColor:
                        item?.id === address?.id
                          ? "primary.main"
                          : "transparent",
                    }}
                    onClick={() => setAddress(item)}
                  >

                    <H6 mb={0.5}>{item.name}</H6>
                    <Paragraph color="grey.700">{item.address_line}</Paragraph>
                    <Paragraph color="grey.700">{item.phone}</Paragraph>
                  </Card>
                </Grid>
              ))}
            </Grid>

          <Grid container sx={{paddingTop:4}} justifyContent="center">
          <BazaarButton
                color="primary"
                variant="contained"
                sx={{ mb: 4.5, px: "1.75rem", height: 40 }}
                onClick={() => {
                  updateAddress(paymentDetails);
                }}
              >
                Actualizar Dirección
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

export default ModalEditAddress;
