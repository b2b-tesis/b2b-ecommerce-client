import {Box, Dialog, DialogContent, Divider, Grid, styled} from "@mui/material";

import BazaarButton from "../../../../common/components/BazaarButton";
import FlexBox from "../../../../common/components/flexbox/FlexBox";
import { H2, Paragraph } from "../../../../common/components/Typography";


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

const ModalRefundCancelledOrderSale = ({openDialog, handleCloseDialog,  cancelRefundOrder}) => {

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
          maxWidth: 450,
          width: "100%",
        }}
      >
        <ContentWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12} alignSelf="center">
              <H2>Cancelar Reembolso de Orden de Compra</H2>

              <Paragraph my={2}>
                Al cancelar el reembolso, el dinero de la venta se mantendrá para el vendedor y no procederá ninguna devolución de los productos, la decisión de aceptar o cancelar el reembolso debe ser coordinada con el comprador a través del chat de la orden.
              </Paragraph>

              <Divider
                sx={{
                  mb: 2,
                }}
              />
           <FlexBox alignItems="center" justifyContent="center" gap={5}>
                  <BazaarButton
                    size="small"
                    color="primary"
                    variant="contained"
                    sx={{
                      p: ".6rem",
                      height: 45,
                    }}
                    onClick={cancelRefundOrder}
                  >
                    Sí, Cancelar Reembolso
                  </BazaarButton>

                  <BazaarButton
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{
                      p: ".6rem",
                      height: 45,
                    }}
                    onClick={handleCloseDialog}
                  >
                    Salir
                  </BazaarButton>
                </FlexBox>

            </Grid>
          </Grid>
        </ContentWrapper>

      </DialogContent>
    </Dialog>
  );
};

export default ModalRefundCancelledOrderSale;
