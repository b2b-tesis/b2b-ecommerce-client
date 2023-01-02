import React from "react";
import { Container, Grid } from "@mui/material";

import NavigationsSales from "./NavigationsSales";


const CustomerDashboardLayout = ({ children }) => (
  <Container
  sx={{
    my: "5rem",
  }}
>
  <Grid container spacing={3}>
    <Grid
      item
      lg={3}
      xs={12}
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block",
        },
      }}
    >
      <NavigationsSales />
    </Grid>

    <Grid item lg={9} xs={12}>
      {children}
    </Grid>
  </Grid>
</Container>
);

export default CustomerDashboardLayout;
