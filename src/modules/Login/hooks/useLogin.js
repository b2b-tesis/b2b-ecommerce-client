import * as yup from "yup";
import "yup-phone-lite";
import { useFormik } from "formik";

export const useLogin = () => {

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    ruc:"",
    password: ""
  };

    const formSchema = yup.object().shape({
      ruc:yup.string().min(11, "El RUC tiene 11 dígitos").max(11, "El RUC solo tiene 11 dígitos").required("Debe ingresar el RUC"),
      password: yup.string().required("La contraseña es requerida")
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });

  return {
    values, errors, touched, handleBlur, handleChange, handleSubmit
  };
};

