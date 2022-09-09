import React, { useCallback, useState } from "react";
import { Box, Divider } from "@mui/material";
import Link from "next/link";

import { useLogin } from "./hooks/useLogin";
import BazaarButton from "../../common/components/buttons/Button";
import BazaarTextField from "../../common/components/inputs/TextField";
import { H3, H6, Small } from "../../common/components/Typography";
import { Wrapper } from "../../common/components/wrapper/Wrapper";
import FlexBox from "../../common/components/flexbox/FlexBox";
import FlexRowCenter from "../../common/components/flexbox/FlexRowCenter";
import EyeToggleButton from "../../common/components/buttons/EyeToggleButton";

const LoginView = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useLogin();

  return (
    <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
       <H3 textAlign="center" mb={1}>
       ¡Bienvenido a Baazar!
        </H3>
        <Small
          mb={4.5}
          fontSize={12}
          display="block"
          fontWeight={600}
          color="grey.800"
          textAlign="center"
        >
          Un marketplace B2B creado para conectar empresas 
        </Small>

      <form onSubmit={handleSubmit} noValidate>
        <BazaarTextField
          mb={1.5}
          fullWidth
          name="ruc"
          size="small"
          label="RUC de la empresa"
          variant="outlined"
          onBlur={handleBlur}
          value={values.ruc}
          onChange={handleChange}
          placeholder="23456789012"
          error={!!touched.ruc && !!errors.ruc}
          helperText={touched.ruc && errors.ruc}
        />

       
       
        <BazaarTextField
          sx={{paddingBottom:2}}
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

        <BazaarButton
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          sx={{
            height: 44
          }}
        >
          Iniciar Sesión
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
        <Box>Si no tienes cuenta</Box>
          <Link href="/registro">
            <a>
              <H6 ml={1}  borderColor="grey.900">
                ¡Crea una y accede!
              </H6>
            </a>
          </Link>
      </FlexRowCenter>

      </form>
    </Wrapper>
  );
};

export default LoginView;
