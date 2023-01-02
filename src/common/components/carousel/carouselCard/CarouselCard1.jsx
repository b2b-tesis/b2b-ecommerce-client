import { Grid, styled } from "@mui/material";

import BazaarImage from "../../BazaarImage";
import FlexBetween from "../../flexbox/FlexBetween";


const StyledBox = styled(FlexBetween)(({ theme }) => ({
  ".title": {
    fontSize: 50,
    marginTop: 0,
    lineHeight: 1.2,
    marginBottom: "1.35rem",
  },
  [theme.breakpoints.up("sm")]: {
    ".grid-item": {
      minHeight: 424,
      display: "flex",
      alignItems: "baseline",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    paddingLeft: 0,
    ".title": {
      fontSize: 32,
    },
  },
  [theme.breakpoints.down("xs")]: {
    ".title": {
      fontSize: 16,
    },
    ".title + *": {
      fontSize: 13,
    },
    ".button-link": {
      height: 36,
      padding: "0 1.5rem",
      fontSize: 13,
    },
  },
})); // ==================================================

// ==================================================
const CarouselCard1 = ({ carousel, buttonColor = "primary" }) => {
  return (
    <StyledBox>
      <Grid container spacing={3} alignItems="center" justifyContent="center">

        <Grid item sm={12} xs={12}>
          <BazaarImage
            alt="apple-watch-1"
            src={carousel.photoUrl}
            sx={{
              mx: "auto",
              maxHeight:450,
              display: "block",
              maxWidth: "100%",
            }}
          />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default CarouselCard1;
