import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import "yup-phone-lite";

import { showToastify } from "../../../../common/state/toast/toastSlice";

export const useEditProfile = () => {

  const dispatch = useDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState([]);
  const [selectedBanner, setSelectedBanner] = useState([]);

  const handleSelectedFile = (id,selectedFiles) => {

    if(selectedFiles[0].type === 'image/jpeg' || selectedFiles[0].type === 'image/png'){
      const selectedFilesArray = Array.from(selectedFiles);

      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
    });

      if(id === 'avatar'){
        setSelectedAvatar(imagesArray);
        return;
      }
      if(id === 'banner'){
        setSelectedBanner(imagesArray);
        return;
      }
      
    } else {
      dispatch(showToastify({message:'Solo puede subir un archivo .jpeg o .png', severity:'error'}));
    }

  }

  const handleFormSubmit = () => {
    console.log(values)
  }

  const initialValues = {
    name:"",
    email:"",
    phone: "",
    department: "",
    province: "",
    district: "",
    category_id: Number(),
    description:""
  };

    const formSchema = yup.object().shape({
      name: yup.string().required("El nombre comercial de la empresa es requerido"),
      phone: yup.string().phone("PE", "Ingrese un número de celular correcto").required("El celular es requerido"),
      email: yup.string().email("Correo inválido").required("El email es requerido"),
      department: yup.string().matches(/^[A-Za-z]+$/, 'Must be exactly 5 digits').required("El departamento de origen de la empresa es requerido"),
      province: yup.string().required("La provincia de origen de la empresa es requerido"),
      district: yup.string().required("El distrito de origen de la empresa es requerido")
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });

  return {
    selectedAvatar, selectedBanner, handleSelectedFile, values, errors, touched, handleBlur, handleChange, handleSubmit
  };
};

