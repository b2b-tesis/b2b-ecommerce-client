import React, { Fragment } from "react";
import { Box, Button, Card, Grid, MenuItem, TextField } from "@mui/material";

import DropZone from "./DropZone";
import { useAddProduct } from "../hooks/useAddProduct";
import BazaarSwitch from "../../../../common/components/BazaarSwitch";
import { H6 } from "../../../../common/components/Typography";
import FlexBox from "../../../../common/components/flexbox/FlexBox";
import { CameraAlt } from "@mui/icons-material";
import Image from "next/image";

const ProductForm = ({categoryProducts}) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, onSelectFile, selectedImage, onDragDropFiles, dropFiles,
    productAvailable, setProductAvailable, isUnlimited, setIsUnlimited, loading} = useAddProduct();

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
          accept="image/png, image/jpeg, image/jpg"
          className="hidden"
          onChange={onSelectFile}
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
                  name="product_category_id"
                  onBlur={handleBlur}
                  placeholder="Categoría"
                  onChange={handleChange}
                  value={values.product_category_id}
                  label="Selecciona una Categoría para tu producto"
                  error={!!touched.product_category_id && !!errors.product_category_id}
                  helperText={touched.product_category_id && errors.product_category_id}
                >
                  <MenuItem value={0} hidden>Selecciona una categoría</MenuItem>
                  {categoryProducts?.map((category) => (
                    <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="price"
                  label="Precio Unitario Exacto del Producto"
                  color="primary"
                  size="medium"
                  placeholder="Ejemplo: 20.00"
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
                      onChange={() => setProductAvailable((state) => !state)}
                    />
                </FlexBox>
              </Grid>
                
                 
                  <Grid item sm={isUnlimited ? 12 : 6} xs={12}>
                    <FlexBox flexDirection="row" alignItems="center" justifyContent="center" sx={{paddingTop:1}} >
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
                 
                
              

              <Grid item xs={12}>
                <TextField
                  rows={6}
                  multiline
                  fullWidth
                  color="primary"
                  size="medium"
                  name="description"
                  label="Descripción"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Ingrese todos los detalles que requiera de su producto: Marca, especificaciones, etc. Sea lo más específico y detallista posible."
                  value={values.description}
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FlexBox flexDirection="column" alignItems="center" height="100%">
                  <H6 sx={{paddingBottom:3}}>Imagen Principal</H6>
                  <Box
                    mb={3}
                    height="100%"
                    minHeight="200px"
                    maxHeight="240px"
                    width="100%"
                    overflow="hidden"
                    borderRadius="10px"
                    position="relative"
                    bgcolor={selectedImage[0] ? "" : "grey.200"}
                  >
                    {/* {selectedImage[0] && <img src={selectedImage[0]} className='imgBanner'/>} */}
                    {selectedImage[0] && <Image src={selectedImage[0]} className='imgBanner' alt="image"/>}
                    <Box position="absolute" bottom={20} left={24}>
                    </Box>

                    <Box position="absolute" top={20} right={20}>
                      <UploadButton id="banner" />
                    </Box>
                  </Box>
                </FlexBox>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FlexBox flexDirection="column" alignItems="center" height="100%">
                  <H6 sx={{paddingBottom:3}}>3 Imágenes Secundarias</H6>
                  <DropZone onChange={(files) => onDragDropFiles(files)} dropFilesLength={dropFiles.length}/>
                 </FlexBox>
              </Grid>

              <Grid item sm={6} xs={12}>
              <Button type="submit" variant="contained" color="primary"  disabled={loading ? true : false}>
              {
                loading ? 'Cargando...' : ' Guardar Cambios'
               }
              </Button>
              </Grid>
            </Grid>
          </form>
    </Card>
  );
};

export default ProductForm;
