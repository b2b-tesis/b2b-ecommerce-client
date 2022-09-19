import * as yup from "yup";
import "yup-phone-lite";
import { useFormik } from "formik";
import axios from "axios";
import restService from "../../../common/api/basicApiMethods";
import { useEffect, useState } from "react";

export const useRegister = () => {

  const [valueRuc, setValueRuc] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/category/categories`)
    const {data} = resp.data;
    setCategories(data);
  } 

  useEffect(() => {
    getCategories();
  },[])


  const handleRucSubmit = async () => {
    try{
      const resp = await axios.post('http://localhost:8000/api/v1/user/ruc/validate', {
      ruc:values.ruc.toString()
    })
    const {data} = resp;
    const {result} = data.data;
    // console.log(result);
    if(Object.keys(result).length > 0){
      setValueRuc(true);
      values.department = result.departamento;
      values.province = result.provincia;
      values.district = result.distrito;
    }
    }catch(error){
      console.log(error);

    }
    // const response = await restService('user/ruc/validate').create({
    //   ruc:values.ruc.toString()
    //   })
    //   console.log(response);
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
    handleRucSubmit, values, errors, touched, handleBlur, handleChange, handleSubmit, valueRuc, categories
  };
};

