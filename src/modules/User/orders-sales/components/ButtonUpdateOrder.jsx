import { Button } from "@mui/material";
import React from "react";

const ButtonUpdateOrder = ({ updateState, text }) => {
  return (
    <Button type="submit" variant="contained" color="primary" onClick={updateState}>
      {text}
    </Button>
  );
};

export default ButtonUpdateOrder;
