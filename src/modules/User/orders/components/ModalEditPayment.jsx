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
import { useEditOrderPayment } from "../hooks/useEditOrderPayment";
import LazyImage from "../../../../common/components/LazyImage";
import { convertCard, getTypeCard } from "../../../../common/helpers/convertNumberCard";


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

const ModalEditPayment = ({ openDialog, handleCloseDialog, addressDetails }) => {

  const { paymentResult, payment, setPayment, updatePayment, loading3, loading2} = useEditOrderPayment();

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
          <H2 mb={5}>Seleccione el método con el que realizará el pago y click en Actualizar Método de Pago</H2>
            <Grid container spacing={3} justifyContent="center">
              {paymentResult?.map((item) => (
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
                        item?.id === payment?.id
                          ? "primary.main"
                          : "transparent",
                    }}
                    onClick={() => setPayment(item)}
                  >
                     <Box height={24} width={36} position="relative" mb={1}>
                        <LazyImage
                          layout="fill"
                          objectFit="contain"
                          src={`/assets/images/payment-methods/${getTypeCard(item.card_number)}.svg`}
                        />
                      </Box>

                      <Paragraph color="grey.700">
                        **** **** **** {convertCard(item.card_number)}
                      </Paragraph>
                      <Paragraph color="grey.700">{item.name_on_card}</Paragraph>
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
                  updatePayment(addressDetails);
                }}
              >
                Actualizar Método de Pago
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

export default ModalEditPayment;
