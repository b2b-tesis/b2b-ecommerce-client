import React, { useCallback, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import BazaarButton from "../../common/components/buttons/Button";
import BazaarTextField from "../../common/components/inputs/TextField";
import { H3, Small } from "../../common/components/Typography";
import { Wrapper } from "../../common/components/wrapper/Wrapper";


const RegisterView = () => {

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);


  const handleFormSubmit =  (values) => {
    console.log(values);
  };

  const initialValues = {
    name: ""
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });

  return (
    <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
      <form onSubmit={handleSubmit} noValidate>
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
          Primero valida el RUC de tu empresa y luego llena todos los demás campos
        </Small>

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

        <BazaarButton
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

const formSchema = yup.object().shape({
  name: yup.string().required("Este campo es requerido")
});

export default RegisterView