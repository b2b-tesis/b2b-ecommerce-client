import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

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
        console.log('sad')
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
    ruc: ""
  };

    const formSchema = yup.object().shape({
      // ruc:yup.string().min(11, "El RUC tiene 11 dígitos").max(11, "El RUC solo tiene 11 dígitos").required("Debe ingresar el RUC"),
      name: yup.string().required("El nombre comercial de la empresa es requerido")
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

