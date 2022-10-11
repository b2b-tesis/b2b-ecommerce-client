import React, { Fragment } from "react";
import Link from "next/link";
import Person from "@mui/icons-material/Person";
import { CameraAlt } from "@mui/icons-material";
import { Avatar, Badge, Box, Button, Card,  Grid, MenuItem, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";
import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardNavigation from "../../../common/components/layouts/user-dashboard/Navigations";
import { useEditFormProfile } from "./hooks/useEditFormProfile";
import {useEditImagesProfile} from './hooks/useEditImagesProfile';
import {getCategories, getCategoryName } from "../../../common/helpers/getCategoryName";
import EyeToggleButton from "../../../common/components/buttons/EyeToggleButton";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import BackDrop from "../../../common/components/backDrop/BackDrop";


const EditProfileView = ({userData}) => {
  const {banner, category_id, department, district, email, name, phone, picture, province, ruc, social_media, terms, description, password} = userData;

  const {initialValues, values, errors, touched, handleBlur, handleChange, handleSubmit, passwordVisibility, togglePasswordVisibility, infoText, loading} = useEditFormProfile();
  const {handleSelectedFile, loading2} = useEditImagesProfile();

  initialValues.name = name;
  initialValues.email = email;
  initialValues.phone = phone;
  initialValues.category_id = category_id;
  initialValues.department = department;
  initialValues.province = province;
  initialValues.district = district;
  initialValues.facebook = social_media.facebook;
  initialValues.description = description;
  initialValues.terms = terms;
  initialValues.ruc = ruc;
  initialValues.password = password;

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
      {
        infoText.map((item, ind) => (
          <FlexBox key={ind} justifyContent={"start"} sx={{paddingTop:1, paddingBottom:2}}>
          <Typography
            p="0.5rem 1rem"
            textAlign="center"
            borderRadius="300px"
            color="white"
            bgcolor="secondary.light"
          >
            {item}
          </Typography>
        </FlexBox>
        ))
      }
    
      <Card
        sx={{
          p: 4
        }}
      >
        <Box
          mb={3}
          height="173px"
          overflow="hidden"
          borderRadius="10px"
          position="relative"
          // style={{
          //   background:`url${selectedBanner[0]}`
          // }}
        >
          <img src={banner ? `${process.env.NEXT_PUBLIC_API_URL}/storage/picture/user?filename=${banner}` : '/assets/images/banners/banner-10.png'} className='imgBanner'/>
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
                // src={selectedAvatar.length > 0 ? selectedAvatar[0] : "/assets/images/faces/propic(9).png"}
                src={picture ? `${process.env.NEXT_PUBLIC_API_URL}/storage/picture/user?filename=${picture}` : '/assets/images/faces/propic(9).png'}
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
                      disabled
                      fullWidth
                      color="primary"
                      size="medium"
                      name="ruc"
                      label="RUC"
                      value={ruc}
                      onChange={handleChange}
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
                      type="number"
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
                      value={values.province}
                      onChange={handleChange}
                      error={!!touched.province && !!errors.province}
                      helperText={touched.province && errors.province}
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
                      <MenuItem value={category_id} hidden>{getCategoryName(category_id)}</MenuItem>
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
                      label="Enlace al Facebook de la Empresa"
                      onBlur={handleBlur}
                      value={values.facebook}
                      onChange={handleChange}
                    />
                  </Grid>


                  <Grid  item md={6} xs={12}>
                    <TextField
                      fullWidth
                      color="primary"
                      size="medium"
                      name="terms"
                      label="Enlace al documento PDF de Términos de compra en la empresa"
                      onBlur={handleBlur}
                      value={values.terms}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      color="primary"
                      size="medium"
                      name="password"
                      type={passwordVisibility ? "text" : "password"}
                      label="Ingrese una contraseña para iniciar sesión"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      error={!!touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                      InputProps={{
                        endAdornment: (
                          <EyeToggleButton
                            show={passwordVisibility}
                            click={togglePasswordVisibility}
                          />
                        ),
                      }}
                    />
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
                    />
                  </Grid>
                  
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary"  disabled={loading ? true : false}>
              {
                loading ? 'Cargando...' : ' Guardar Cambios'
               }
              </Button>
            </form>
      </Card>
  
     <BackDrop loading2={loading2} message={'Estamos actualizando su imagen'}/>

    </CustomerDashboardLayout>
    
  );
};

export default EditProfileView;
