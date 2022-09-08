import * as yup from "yup";
import "yup-phone-lite";
import { useFormik } from "formik";

export const useRegister = () => {


  const handleRucSubmit = () => {
    console.log(values.ruc);
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    ruc:"",
    department: "",
    province: "",
    district: "",
    name: "",
    category: "",
    phone: "",
    email:"",
    password: "",
  re_password: "",
    agreement: false,
  };



    const formSchema = yup.object().shape({
      ruc:yup.string().min(11, "El RUC tiene 11 dígitos").max(11, "El RUC solo tiene 11 dígitos").required("Debe ingresar el RUC"),
      category: yup.string().required("Debe seleccionar la categoría de su empresa"),
      name: yup.string().required("El nombre comercial de la empresa es requerido"),
      phone: yup.string().phone("PE", "Ingrese un número de celular correcto").required("El celular es requerido"),
      email: yup.string().email("Correo inválido").required("El email es requerido"),
      password: yup.string().required("La contraseña es requerida"),
      re_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "La contraseña deben coincidir")
        .required("Ingrese nuevamente la contraseña"),
      agreement: yup.bool().test(
          "agreement",
          "Tienes que aceptar los términos y condiciones para registrarte",
          (value) => value === true
        )
        .required("Tienes que aceptar los términos y condiciones para registrarte"),
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });

  return {
    handleRucSubmit, values, errors, touched, handleBlur, handleChange, handleSubmit
  };
};

