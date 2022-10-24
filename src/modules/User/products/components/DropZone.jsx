/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Button, Divider } from "@mui/material";
import { H5, Small } from "../../../../common/components/Typography";


const DropZone = ({ onChange, dropFilesLength }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (onChange) onChange(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {'image/*': ['.jpeg', '.jpg', '.png']},
    maxFiles: 3,
  });
  return (
    <Box
      py={4}
      px={{
        md: 10,
        xs: 4,
      }}
      height="100%"
      display="flex"
      minHeight="200px"
      alignItems="center"
      borderRadius="10px"
      border="1.5px dashed"
      flexDirection="column"
      borderColor="grey.300"
      justifyContent="center"
      textAlign="center"
      bgcolor={isDragActive ? "grey.400" : "grey.100"}
      sx={{
        transition: "all 250ms ease-in-out",
        outline: "none",
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <H5 mb={1} color="grey.600">
        {"Arrastra las 3 imágenes juntas"}
      </H5>

      <Divider
        sx={{
          "::before, ::after": {
            borderColor: "grey.300",
            width: 70,
          },
        }}
      >
        <Small  px={1}>
          o también
        </Small>
      </Divider>

      <Button
        type="button"
        variant="outlined"
        color="primary"
        sx={{
          px: 4,
          my: 4,
        }}
      >
        Seleccione 3 Imágenes
      </Button>

      <Small color="grey.600">{dropFilesLength} imágenes cargadas</Small>
    </Box>
  );
};

export default DropZone;
