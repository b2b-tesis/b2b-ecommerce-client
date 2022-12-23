import { Button } from "@mui/material";
import React from "react";

const ButtonUploadPDF = ({ uploadPDF }) => {
  return (
    <Button type="submit" variant="contained" color="secondary" onClick={uploadPDF}>
      Subir PDF Boleta/Factura
    </Button>
  );
};

export default ButtonUploadPDF;
