import React, { useCallback, useState } from "react";
import { Button, Checkbox, FormControlLabel, Grid, MenuItem, TextField } from "@mui/material";

import { useRegister } from "./hooks/useRegister";
import BazaarButton from "../../common/components/buttons/Button";
import BazaarTextField from "../../common/components/inputs/TextField";
import { H3, H6, Small } from "../../common/components/Typography";
import { Wrapper } from "../../common/components/wrapper/Wrapper";
import FlexBox from "../../common/components/flexbox/FlexBox";
import EyeToggleButton from "./components/EyeToggleButton";

const RegisterView = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const { handleRucSubmit, values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useRegister();

  return (
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
          Primero valida el RUC de tu empresa y luego llena todos los demás
          campos para crear tu cuenta
        </Small>

       <Grid item container xs={12} justifyContent="space-between">
       
         <Grid item xs={8}>
         <TextField
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
              onClick={() => handleRucSubmit(values.ruc)}
              fullWidth
              type="submit"
              color="primary"
              variant="contained"
              sx={{
                height: 40,
              }}
            >
              Validar
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
          mb={1.5}
          fullWidth
          name="name"
          size="small"
          label="Nombre comercial de la empresa"
          variant="outlined"
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
          placeholder="Tiendas Pablito"
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <BazaarTextField
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
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="fashion">Fashion</MenuItem>
        </BazaarTextField>

        <BazaarTextField
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
                <H6 ml={1} borderColor="grey.900">
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
      </form>
    </Wrapper>
  );
};

export default RegisterView;