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

const ModalRefundOrder = ({openDialog, handleCloseDialog,  refundOrder}) => {

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
              <H2>Reembolso de Orden de Compra</H2>

              <Paragraph my={2}>
                Al solicitar reembolso, la orden pasará a un estado de pendiente, lo que significa que debe comunicarse a través del chat con el vendedor para establecer el reembolso, una vez el vendedor lo apruebe, el dinero será reembolsado a su cuenta.
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
                    onClick={refundOrder}
                  >
                    Sí, Solicitar Reembolso
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
                    Cancelar
                  </BazaarButton>
                </FlexBox>

            </Grid>
          </Grid>
        </ContentWrapper>

      </DialogContent>
    </Dialog>
  );
};

export default ModalRefundOrder;
