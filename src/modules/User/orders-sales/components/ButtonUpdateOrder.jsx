import { Button } from "@mui/material";
import React from "react";

const ButtonUpdateOrder = ({ updateState, text, color="primary" }) => {
  return (
    <Button type="submit" variant="contained" color={color} onClick={updateState}>
      {text}
    </Button>
  );
};

export default ButtonUpdateOrder;
