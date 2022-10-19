import React, { Fragment, useState } from "react";
import { Box, Button, Card, Grid, MenuItem, TextField } from "@mui/material";

import DropZone from "./DropZone";
import { useAddProduct } from "../hooks/useAddProduct";
import BazaarSwitch from "../../../../common/components/BazaarSwitch";
import { H6 } from "../../../../common/components/Typography";
import FlexBox from "../../../../common/components/flexbox/FlexBox";
import { CameraAlt } from "@mui/icons-material";

const ProductForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit} = useAddProduct();
  const [productAvailable, setProductAvailable] = useState(false);
  const [isUnlimited, setIsUnlimited] = useState(false);

  const UploadButton = ({ id, style = {} }) => {
    return (
      <Fragment>
        <label htmlFor={id}>
          <Button
            size="small"
            component="span"
            color="primary"
            sx={{
              p: "6px",
              height: "auto",
              borderRadius: "50%",
              bgcolor: "primary.100",
              ...style,
              ":hover": {
                backgroundColor: "grey.300",
              },
            }}
          >
            <CameraAlt fontSize="small" color="primary" />
          </Button>
        </label>
  
        <input
          id={id}
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={(event) => handleSelectedFile(id, event.target.files, values.ruc)}
          style={{
            display: "none",
          }}
        />
      </Fragment>
    );
  };

  return (
    <Card
      sx={{
        p: 6,
      }}
    >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Nombre"
                  color="primary"
                  size="medium"
                  placeholder="Nombre"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  select
                  fullWidth
                  color="primary"
                  size="medium"
                  name="category"
                  onBlur={handleBlur}
                  placeholder="Categoría"
                  onChange={handleChange}
                  value={values.category}
                  label="Selecciona una Categoría para tu producto"
                  error={!!touched.category && !!errors.category}
                  helperText={touched.category && errors.category}
                >
                  <MenuItem value="electronics">Electronics</MenuItem>
                  <MenuItem value="fashion">Fashion</MenuItem>
                </TextField>
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="price"
                  label="Precio Unitario del Producto"
                  color="primary"
                  size="medium"
                  placeholder="Precio Unitario del Producto"
                  value={values.price}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.price && !!errors.price}
                  helperText={touched.price && errors.price}
                />
              </Grid>

              <Grid item sm={6} xs={12} >
                <FlexBox flexDirection="row" alignItems="center" justifyContent="center" sx={{paddingTop:1}}>
                  <H6>Producto Disponible: {productAvailable ? 'Sí' : 'No'}</H6>
                    <BazaarSwitch
                      color="primary"
                      checked={productAvailable}
                      onChange={() => {setProductAvailable((state) => !state); setIsUnlimited(false)}}
                    />
                </FlexBox>
              </Grid>

              {
                productAvailable && (
                 <>
                  <Grid item sm={isUnlimited ? 12 : 6} xs={12}>
                    <FlexBox flexDirection="row" alignItems="center" justifyContent="center" sx={{paddingTop:1}}>
                      <H6>Es ilimitado: {isUnlimited ? 'Sí' : 'No'}</H6>
                        <BazaarSwitch
                          color="primary"
                          checked={isUnlimited}
                          onChange={() => setIsUnlimited((state) => !state)}
                        />
                        {
                          isUnlimited && <H6>(Se puede ingresar cualquier cantidad de stock para comprar el producto)</H6>
                        }
                    </FlexBox>
                  </Grid>

                  {
                    !isUnlimited && 
                    <Grid item sm={6} xs={12}>
                      <TextField
                        type='number'
                        fullWidth
                        name="stock"
                        label="Stock máximo del Producto por compra"
                        color="primary"
                        size="medium"
                        placeholder="Stock máximo del Producto por compra"
                        value={values.stock}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.stock && !!errors.stock}
                        helperText={touched.stock && errors.stock}
                      />
                    </Grid>
                  }
                 </>
                )
              }

              <Grid item xs={12}>
                <TextField
                  rows={6}
                  multiline
                  fullWidth
                  color="info"
                  size="medium"
                  name="description"
                  label="Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Description"
                  value={values.description}
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                />
              </Grid>

              <Grid item xs={6}>
                <Box
                  mb={3}
                  height="173px"
                  overflow="hidden"
                  borderRadius="10px"
                  position="relative"
                >
                  <img src={'https://assets3.razerzone.com/Y9fv8qRtbhHgeb5h7pV3EMKBl5o=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5c%2Fhd3%2F9286405095454%2F210104-blade-15-ch8-fhd-1500x1000-1.jpg'} className='imgBanner'/>
                  <Box position="absolute" bottom={20} left={24}>
                  </Box>

                  <Box position="absolute" top={20} right={20}>
                    <UploadButton id="banner" />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <DropZone onChange={(files) => console.log(files)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Guardar Producto
                </Button>
              </Grid>
            </Grid>
          </form>
    </Card>
  );
};

export default ProductForm;
