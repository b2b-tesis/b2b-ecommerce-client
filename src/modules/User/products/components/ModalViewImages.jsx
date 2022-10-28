import { Close } from "@mui/icons-material";
import {Box, Dialog, DialogContent, Grid, IconButton, styled} from "@mui/material";

import Carousel from '../../../../common/components/carousel/Carousel';
import BazaarImage from '../../../../common/components/BazaarImage';
import { H1, H2, Paragraph } from "../../../../common/components/Typography";

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

const ModalViewImages = ({openDialog, handleCloseDialog, pictures, name, price, description, category}) => {

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
            <Carousel totalSlides={pictures.length} visibleSlides={1}>
                {pictures.map((item, index) => (
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
              <H2>{name}</H2>

              <Paragraph py={1} color="grey.500" fontWeight={600} fontSize={13}>
                CATEGORÍA: {category}
              </Paragraph>

              <H1 color="primary.main">S/.{price}</H1>

              <Paragraph my={2}>
                {description}
              </Paragraph>

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

export default ModalViewImages;
