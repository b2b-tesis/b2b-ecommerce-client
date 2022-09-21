import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import "yup-phone-lite";
import { useFormik } from "formik";
import axios from "axios";
import Cookies from 'js-cookie';

import restService from "../../../common/api/basicApiMethods";
import { setLoading, setLoading2 } from "../../../common/state/loading/loadingSlice";
import { showToastify } from "../../../common/state/toast/toastSlice";
import { setUser } from "../../../common/state/auth/authSlice";

export const useRegister = () => {

  const [valueRuc, setValueRuc] = useState(false);
  const [categories, setCategories] = useState([]);
  const {loading, loading2} = useSelector((state) => (state.loading))
  const dispatch = useDispatch();
  const router = useRouter();

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
      dispatch(setLoading());
      const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/ruc/validate`, {
      ruc:values.ruc.toString()
    })
      const {data} = resp;
      const {result} = data.data;

      if(Object.keys(result).length > 0){
        setValueRuc(true);
        values.department = result.departamento;
        values.province = result.provincia;
        values.district = result.distrito;
      }
      dispatch(setLoading());
      dispatch(showToastify({message:'¡RUC fue validada exitosamente!', severity:'success'}));
    }catch(error){
      dispatch(setLoading());
      dispatch(showToastify({message:'RUC incorrecta', severity:'error'}));
    }
    // const response = await restService('user/ruc/validate').create({
    //   ruc:values.ruc.toString()
    //   })
    //   console.log(response);
  };

  const handleFormSubmit = async () => {
    try{
      dispatch(setLoading2());
      const {agreement, re_password, ruc, phone, ...valuesUser} = values;
      valuesUser.ruc = values.ruc.toString();
      valuesUser.phone = values.phone.toString();
      
      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, valuesUser);
      const {error} = data;

      if(Object.keys(error).length === 0 ){
        const {token, user} = data.data;
        Cookies.set('tokenb2b', token );
        dispatch(setUser(user));
      }

      const destination = router.query.p?.toString() || '/';
      router.replace(destination);
      dispatch(setLoading2());

    } catch(err){
      dispatch(setLoading2());
      const {response} = err;
      const {error}  = response.data

      dispatch(showToastify({message:error.message, severity:'error'}));
    }

  };

  const initialValues = {
    ruc:"",
    department: "",
    province: "",
    district: "",
    name: "",
    category_id: Number(),
    phone: "",
    email:"",
    password: "",
  re_password: "",
    agreement: false,
  };



    const formSchema = yup.object().shape({
      ruc:yup.string().min(11, "El RUC tiene 11 dígitos").max(11, "El RUC solo tiene 11 dígitos").required("Debe ingresar el RUC"),
      category_id: yup.number().min(1, 'Debe seleccionar una categoría').required("Debe seleccionar la categoría de su empresa"),
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
    handleRucSubmit, values, errors, touched, handleBlur, handleChange, handleSubmit, valueRuc, categories, loading, loading2
  };
};

