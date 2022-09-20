import React, { useCallback, useState } from "react";
import { Box, Button, Checkbox, CircularProgress, Divider, FormControlLabel, Grid, MenuItem, TextField } from "@mui/material";
import Link from "next/link";

import { useRegister } from "./hooks/useRegister";
import BazaarButton from "../../common/components/buttons/Button";
import BazaarTextField from "../../common/components/inputs/TextField";
import { H3, H6, Small } from "../../common/components/Typography";
import { Wrapper } from "../../common/components/wrapper/Wrapper";
import FlexBox from "../../common/components/flexbox/FlexBox";
import EyeToggleButton from "../../common/components/buttons/EyeToggleButton";
import FlexRowCenter from "../../common/components/flexbox/FlexRowCenter";
import Toast from "../../common/components/toast/Toast";

const RegisterView = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const { handleRucSubmit, values, errors, touched, handleBlur, handleChange, handleSubmit, valueRuc, categories, loading } =
    useRegister();

  return (
    <>
      <Toast/>

      <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
       <H3 textAlign="center" mb={1}>
          Crea Tu Cuenta
        </H3>
        <Small
          mb={4.5}
          fontSize={12}
          display="block"
          fontWeight={600}
          color="grey.800"
          textAlign="center"
        >
          Primero ingresa y valida el RUC de tu empresa, luego llena todos los demás
          campos para crear tu cuenta
        </Small>

       <Grid item container xs={12} justifyContent="space-between" sx={{paddingBottom:5}}>
       
         <Grid item xs={8}>
         <TextField
            disabled={valueRuc ? true : false}
              mb={1.5}
              fullWidth
              name="ruc"
              size="small"
              label="RUC"
              variant="outlined"
              onBlur={handleBlur}
              value={values.ruc}
              onChange={handleChange}
              placeholder="23456789012"
              error={!!touched.ruc && !!errors.ruc}
              helperText={touched.ruc && errors.ruc}
              type="number"
            />
         </Grid>
            <Grid item xs={3}>
            <Button
              disabled={loading || valueRuc ? true : false}
              onClick={() => handleRucSubmit(values.ruc)}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              {
                loading ? (
                  <CircularProgress thickness={2} color="secondary" size={25}/>
                  ) : 'Validar'
              }
            </Button>
            </Grid>
            
       </Grid>
      <form onSubmit={handleSubmit} noValidate>
        <BazaarTextField
          mb={1.5}
          fullWidth
          name="department"
          size="small"
          label="Departamento"
          variant="outlined"
          disabled
          value={values.department}
          onChange={handleChange}
        />
        <BazaarTextField
          mb={1.5}
          fullWidth
          name="province"
          size="small"
          label="Provincia"
          variant="outlined"
          disabled
          value={values.province}
          onChange={handleChange}
        />
        <BazaarTextField
          mb={1.5}
          fullWidth
          name="district"
          size="small"
          label="Distrito"
          variant="outlined"
          disabled
          value={values.district}
          onChange={handleChange}
        />

        <BazaarTextField
          disabled={valueRuc ? false : true}
          mb={1.5}
          fullWidth
          name="name"
          size="small"
          label="Nombre comercial de la empresa"
          variant="outlined"
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
          placeholder="Ingresa el nombre de tu empresa"
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <BazaarTextField
        disabled={valueRuc ? false : true}
          mb={1.5}
          select
          fullWidth
          color="info"
          size="small"
          name="category"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.category}
          label="Categoría de la empresa"
          error={!!touched.category && !!errors.category}
          helperText={touched.category && errors.category}
        >
          {categories?.map((category) => (
            <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
          ))}
          {/* <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="fashion">Fashion</MenuItem> */}
        </BazaarTextField>

        <BazaarTextField
        disabled={valueRuc ? false : true}
          mb={1.5}
          fullWidth
          name="phone"
          size="small"
          label="Celular de contacto"
          variant="outlined"
          type="number"
          onBlur={handleBlur}
          value={values.phone}
          onChange={handleChange}
          placeholder="999999999"
          error={!!touched.phone && !!errors.phone}
          helperText={touched.phone && errors.phone}
        />

        <BazaarTextField
        disabled={valueRuc ? false : true}
          mb={1.5}
          fullWidth
          name="email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label="Correo"
          placeholder="ejemplo@email.com"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <BazaarTextField
        disabled={valueRuc ? false : true}
          mb={1.5}
          fullWidth
          size="small"
          name="password"
          label="Contraseña"
          variant="outlined"
          autoComplete="on"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          type={passwordVisibility ? "text" : "password"}
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

        <BazaarTextField
        disabled={valueRuc ? false : true}
          fullWidth
          size="small"
          autoComplete="on"
          name="re_password"
          variant="outlined"
          label="Repite la Contraseña"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.re_password}
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.re_password && !!errors.re_password}
          helperText={touched.re_password && errors.re_password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />

        <FormControlLabel
        disabled={valueRuc ? false : true}
        sx={{paddingBottom:2, paddingTop:2}}
          name="agreement"
          className="agreement"
          onChange={handleChange}
          control={
            <Checkbox
              size="small"
              color="primary"
              checked={values.agreement || false}
            />
          }
          label={
            <FlexBox
              flexWrap="wrap"
              alignItems="center"
              justifyContent="flex-start"
            >
              Al registrarte, aceptas los
              <a href="/" target="_blank" rel="noreferrer noopener">
                <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
                  Términos y Condiciones
                </H6>
              </a>
            </FlexBox>
          }
        />

        <BazaarButton
          disabled={values.agreement ? false : true}
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          sx={{
            height: 44,
          }}
        >
          Crear cuenta
        </BazaarButton>

        <Box mb={2} mt={3.3}>
          <Box width="200px" mx="auto">
            <Divider />
          </Box>

          <FlexBox justifyContent="center" mt={-1.625}>
            <Box color="grey.600" bgcolor="background.paper" px={2}>
              o
            </Box>
          </FlexBox>
        </Box>

      <FlexRowCenter my="1.25rem">
        <Box>  Si ya tienes cuenta</Box>
          <Link href="/login">
            <a>
              <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
              Inicia Sesión
              </H6>
            </a>
          </Link>
      </FlexRowCenter>

      </form>
    </Wrapper>
    </>
  );
};

export default RegisterView;
