import { Button } from "@mui/material";
import React from "react";

const ButtonUploadPDF = ({ uploadPDF }) => {
  return (
    <>
    <label htmlFor={2}>
        <Button component="span" variant="contained" color="secondary">
         Subir PDF de Boleta/Factura
        </Button> 
        </label>
  
        <input
          id={2}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(event) => uploadPDF(event.target.files)}
          style={{
            display: "none",
          }}
        />
    </>

  );
};

export default ButtonUploadPDF;
