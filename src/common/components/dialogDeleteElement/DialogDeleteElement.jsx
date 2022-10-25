import {Box, Dialog, DialogContent, Divider, Grid, styled} from "@mui/material";
import { useSelector } from "react-redux";
import BazaarButton from "../BazaarButton";
import FlexBox from "../flexbox/FlexBox";
import { H2, Paragraph } from "../Typography";


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

const DialogDeleteElement = ({openDialog, handleCloseDialog, title, element, deleteAction}) => {

  const {loading} = useSelector((state) => (state.loading))

  return (
    <Dialog
      open={openDialog}
      maxWidth={false}
      onClose={!loading ? handleCloseDialog : null}
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
              <H2>Eliminar de {title}</H2>

              <Paragraph my={2}>
                Al eliminar {element} de {title}, ya no estará disponible en su lista correspondiente y deberá agregarlo nuevamente si desea tenerlo.
              </Paragraph>

              <Divider
                sx={{
                  mb: 2,
                }}
              />
           <FlexBox alignItems="center" justifyContent="center" gap={5}>
                  <BazaarButton
                     disabled={loading ? true : false}
                    size="small"
                    color="primary"
                    variant="contained"
                    sx={{
                      p: ".6rem",
                      height: 45,
                    }}
                    onClick={deleteAction}
                  >
                    {
                      loading ? 'Cargando...' : 'Sí, Eliminar'
                    }
                  </BazaarButton>

                  <BazaarButton
                    disabled={loading ? true : false}
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

export default DialogDeleteElement;
