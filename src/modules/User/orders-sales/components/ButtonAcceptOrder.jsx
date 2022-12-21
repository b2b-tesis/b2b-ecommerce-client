import { Button } from "@mui/material";
import React from "react";

const ButtonAcceptOrder = ({ acceptOrder }) => {
  return (
    <Button type="submit" variant="contained" color="primary" onClick={acceptOrder}>
      Aceptar Orden
    </Button>
  );
};

export default ButtonAcceptOrder;
