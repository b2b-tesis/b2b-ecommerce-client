import React, { Fragment } from "react";
import Link from "next/link";
import Person from "@mui/icons-material/Person";
import { CameraAlt } from "@mui/icons-material";
import { Avatar, Badge, Box, Button, Card, Divider, Grid, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";

import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";
import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardNavigation from "../../../common/components/layouts/user-dashboard/Navigations";
import { useEditProfile } from "./hooks/useEditProfile";
import Toast from "../../../common/components/toast/Toast";
import { getCategories } from "../../../common/helpers/getCategoryName";
import { H5, Small } from "../../../common/components/Typography";


const EditProfileView = () => {
  const {selectedAvatar, selectedBanner, handleSelectedFile, 
    values, errors, touched, handleBlur, handleChange, handleSubmit} = useEditProfile();

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
          onChange={(event) => handleSelectedFile(id, event.target.files)}
          style={{
            display: "none",
          }}
        />
      </Fragment>
    );
  };

  return (
    <>
      <Toast bottom/>
     <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={Person}
        title="Editar Perfil"
        navigation={<CustomerDashboardNavigation />}
        button={
          <Link href="/usuario/perfil" passHref>
            <Button
              color="primary"
              sx={{
                px: 4,
                bgcolor: "primary.light",
              }}
            >
              Regresar a Perfil
            </Button>
          </Link>
        }
      />

      <Card
        sx={{
          p: 4,
        }}
      >
        <Box
          mb={3}
          height="173px"
          overflow="hidden"
          borderRadius="10px"
          position="relative"
          style={{
            background:`url${selectedBanner[0]}`
          }}
        >
          <img src={selectedBanner.length > 0 ? selectedBanner[0] : "/assets/images/banners/banner-10.png"} className='imgBanner'/>
          <Box position="absolute" bottom={20} left={24}>
            <Badge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={
                <UploadButton
                  id="avatar"
                  style={{
                    bgcolor: "grey.300",
                  }}
                />
              }
            >
              <Avatar
                src={selectedAvatar.length > 0 ? selectedAvatar[0] : "/assets/images/faces/propic(9).png"}
                sx={{
                  width: 80,
                  height: 80,
                  border: "4px solid",
                  borderColor: "grey.100",
                }}
              />
            </Badge>
          </Box>

          <Box position="absolute" top={20} right={20}>
            <UploadButton id="banner" />
          </Box>
        </Box>


            <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      color="primary"
                      size="medium"
                      name="name"
                      label="Nombre Comercial de la Empresa"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      error={!!touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      color="primary"
                      size="medium"
                      name="ruc"
                      label="RUC"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.ruc}
                      error={!!touched.ruc && !!errors.ruc}
                      helperText={touched.ruc && errors.ruc}
                      type="number"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      color="primary"
                      name="email"
                      type="email"
                      label="Email"
                      size="medium"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      type="tel"
                      color="primary"
                      size="medium"
                      name="phone"
                      label="Celular de contacto"
                      onBlur={handleBlur}
                      value={values.phone}
                      onChange={handleChange}
                      error={!!touched.phone && !!errors.phone}
                      helperText={touched.phone && errors.phone}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      color="primary"
                      size="medium"
                      name="department"
                      label="Departamento"
                      onBlur={handleBlur}
                      value={values.department}
                      onChange={handleChange}
                      error={!!touched.department && !!errors.department}
                      helperText={touched.department && errors.department}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      color="primary"
                      size="medium"
                      name="province"
                      label="Provincia"
                      onBlur={handleBlur}
                      value={values.medium}
                      onChange={handleChange}
                      error={!!touched.medium && !!errors.medium}
                      helperText={touched.medium && errors.medium}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      color="primary"
                      size="medium"
                      name="district"
                      label="Distrito"
                      onBlur={handleBlur}
                      value={values.district}
                      onChange={handleChange}
                      error={!!touched.district && !!errors.district}
                      helperText={touched.district && errors.district}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                  <TextField
                      select
                      fullWidth
                      color="primary"
                      size="medium"
                      name="category_id"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.category_id}
                      error={!!touched.category_id && !!errors.category_id}
                      helperText={touched.category_id && errors.category_id}
                    >
                      {/* <MenuItem value={0} hidden>Selecciona una categoría</MenuItem> */}
                      {getCategories().map((category) => (
                        <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                      ))}

                    </TextField>
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      color="primary"
                      size="medium"
                      name="facebook"
                      label="Facebook de la Empresa"
                      onBlur={handleBlur}
                      value={values.facebook}
                      onChange={handleChange}
                      error={!!touched.facebook && !!errors.facebook}
                      helperText={touched.facebook && errors.facebook}
                    />
                  </Grid>

                  <Grid item  xs={12}>
                    <Box
                      py={4}
                      px={{
                        md: 10,
                        xs: 4,
                      }}
                      display="flex"
                      minHeight="200px"
                      alignItems="center"
                      borderRadius="10px"
                      border="1.5px dashed"
                      flexDirection="column"
                      borderColor="grey.300"
                      justifyContent="center"
                      textAlign="center"
                      bgcolor="grey.200"
                      sx={{
                        transition: "all 250ms ease-in-out",
                        outline: "none",
                      }}
                    >
                      {/* <input /> */}
                      <H5 mb={1} color="grey.600">
                        Drag & drop product image here
                      </H5>

                      <Button
                        type="button"
                        variant="outlined"
                        color="info"
                        sx={{
                          px: 4,
                          my: 4,
                        }}
                      >
                        Select files
                      </Button>

                      <Small color="grey.600">{"Upload 280*280 image"}</Small>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      rows={6}
                      multiline
                      fullWidth
                      color="primary"
                      size="medium"
                      name="description"
                      label="Descripción de la Empresa"
                      onBlur={handleBlur}
                      value={values.description}
                      onChange={handleChange}
                      error={!!touched.description && !!errors.description}
                      helperText={touched.description && errors.description}
                    />
                  </Grid>
                  
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary">
                Guardar Cambios
              </Button>
            </form>
      </Card>
  

    </CustomerDashboardLayout>
    </>
  );
};

export default EditProfileView;
