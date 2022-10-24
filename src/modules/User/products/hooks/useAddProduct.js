import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showToastify } from "../../../../common/state/toast/toastSlice";

export const useAddProduct = () => {

  const [selectedImage, setSelectedImage] = useState([]);
  const [dropFiles, setDropFiles] = useState([]);
  const dispatch = useDispatch();

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    if(selectedFiles[0].type === 'image/jpeg' || selectedFiles[0].type === 'image/png'){
      const selectedFilesArray = Array.from(selectedFiles);

      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
  
      setSelectedImage(imagesArray);
    }
    else{
      dispatch(showToastify({message:'Solo puede subir un archivo .jpg o .png', severity:'error'}));
    }
  };

  const onDragDropFiles = (files) => {
    setDropFiles(files);
    if(files.length < 3){
      dispatch(showToastify({message:'Debe subir a la vez 3 archivos .jpg y/o .png', severity:'error'}));
    }
  }

  const saveProduct = () =>{
    if(selectedImage.length === 0){
      dispatch(showToastify({message:'Debe subir la imagen principal del producto antes de guardar', severity:'error'}));
    }
    
    // console.log(values);
  }

  const initialValues = {
    name: "",
    category: "",
    price: 0,
    stock: 0,
    // is_unlimited: false,
    // is_available: false,
    description:"",
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("El nombre del producto es obligatorio"),
    // category: yup.number().required("Debe seleccionar una categoría para su producto"),
    description: yup.string().required("La descripción del producto es obligatoria"),
    stock: yup.number().required("required"),
    price: yup.number().required("required"),
    sale_price: yup.number().required("required"),
    tags: yup.object().required("required"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    onSubmit: saveProduct,
    validationSchema: formSchema,
  });

  return {
     values, errors, touched, handleBlur, handleChange, handleSubmit,
     onSelectFile, selectedImage, onDragDropFiles, dropFiles
  };
};

