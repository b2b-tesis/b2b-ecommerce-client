import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import * as yup from "yup";
import "yup-phone-lite";
import { useFormik } from "formik";
import axios from "axios";
import Cookies from 'js-cookie';

import { setLoading } from "../../../common/state/loading/loadingSlice";
import { setUser } from "../../../common/state/auth/authSlice";
import { showToastify } from "../../../common/state/toast/toastSlice";;

export const useLogin =  () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const {loading} = useSelector((state) => (state.loading))

  const handleFormSubmit = async () => {

    try{
      dispatch(setLoading());
      
      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, values);
      console.log(data);
      const {error} = data;

      if(Object.keys(error).length === 0 ){
        const {token, user} = data.data;
        Cookies.set('tokenb2b', token );
        dispatch(setUser(user));
      }

      const destination = router.query.p?.toString() || '/';
      router.replace(destination);
      dispatch(setLoading());

    } catch(err){
  
      dispatch(setLoading());
      const {response} = err;
      const {error}  = response.data

      dispatch(showToastify({message:error.message, severity:'error'}));
    }
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
    values, errors, touched, handleBlur, handleChange, handleSubmit, loading
  };
};

