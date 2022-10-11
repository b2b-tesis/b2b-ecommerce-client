import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import "yup-phone-lite";
import { useRouter } from "next/router";

import { showToastify } from "../../../../common/state/toast/toastSlice";
import axios from "axios";
import { setLoading } from "../../../../common/state/loading/loadingSlice";
import { getTokenB2B } from "../../../../common/helpers/getCookies";

export const useEditFormProfile = () => {

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const dispatch = useDispatch();
  const {loading} = useSelector((state) => (state.loading))
  const router = useRouter();

  const infoText = ['Al hacer click en el botón con el ícono de la cámara y cargar una imagen para su banner o perfil, automáticamente se actualizará y será su nueva imagen, el botón Guardar Cambios solo actualiza los campos de texto, mas no las imágenes','Solo modifique los datos que desea que se actualizen, los que no requieran ser actualizados debe dejarlos tal como están'];

  const handleFormSubmit = async () => {

    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/perfil/editar`;
      router.replace(destination);
      return
    }
   try{
    dispatch(setLoading());
    const {ruc, facebook, ...valuesUser} = values;
      valuesUser.social_media = {facebook:values.facebook};
      valuesUser.phone = values.phone.toString();
    
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    const resp = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/user/${values.ruc}`, valuesUser, config);

    if(resp.status === 200){
      dispatch(setLoading());
      router.push('/usuario/perfil');
    }
  } catch(err){
    dispatch(setLoading());
    dispatch(showToastify({message:'No se pudo guardar, intentelo más tarde', severity:'error'}));
   }
  }

  const initialValues = {
    name:"",
    email:"",
    phone: "",
    department: "",
    province: "",
    district: "",
    password:"",
    category_id: Number(),
    facebook:"",
    description:"",
    terms:"",
    ruc:""
  };

    const formSchema = yup.object().shape({
      name: yup.string().required("El nombre comercial de la empresa es requerido"),
      phone: yup.string().required("El número de celular de la empresa es requerido"),
      email: yup.string().email("Correo inválido").required("El email es requerido"),
      department: yup.string().matches(/^[A-Za-z]+$/, 'Must be exactly 5 digits').required("El departamento de origen de la empresa es requerido"),
      province: yup.string().required("La provincia de origen de la empresa es requerido"),
      district: yup.string().required("El distrito de origen de la empresa es requerido"),
      category_id:yup.number().required('Debe seleccionar una categoría para su empresa'),
      password: yup.string().required("La contraseña es requerida"),
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });

  return {
    initialValues, values, errors, touched, handleBlur, handleChange, handleSubmit, passwordVisibility, togglePasswordVisibility, infoText, loading
  };
};

