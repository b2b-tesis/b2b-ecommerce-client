import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/router";
import { showToastify } from "../../../../common/state/toast/toastSlice";
import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading } from "../../../../common/state/loading/loadingSlice";

export const useAddProduct = () => {

  const [selectedImage, setSelectedImage] = useState([]);
  const [picture, setPicture] = useState();
  const [dropFiles, setDropFiles] = useState([]);
  const [productAvailable, setProductAvailable] = useState(false);
  const [isUnlimited, setIsUnlimited] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const {loading} = useSelector((state) => (state.loading));

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    if(selectedFiles[0].type === 'image/jpeg' || selectedFiles[0].type === 'image/png'){
      setPicture(selectedFiles[0]);
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

  const saveProduct = async () =>{
    if(selectedImage.length === 0){
      dispatch(showToastify({message:'Debe subir la imagen principal del producto antes de guardar', severity:'error'}));
      return
    }
    if(dropFiles.length < 3){
      dispatch(showToastify({message:'Debe subir exactamente 3 imagenes secundarias del producto antes de guardar', severity:'error'}));
      return
    }
    const {price, ...valuesProduct} = values;

    valuesProduct.price = Number(values.price);
    valuesProduct.is_available = productAvailable;
    valuesProduct.is_unlimited = isUnlimited;

    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = '/login?p=/usuario/productos/agregar';
      router.replace(destination);
      return
    }
   try{
    dispatch(setLoading());
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product`, valuesProduct, config);

    if(resp.status === 201){
      try{
        const {product_id} = resp.data;
        const filePicture = picture;
          const formData = new FormData();
          formData.append("product-picture", filePicture);
          formData.append("product-id", product_id)
        
          const respPicture = await axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/storage/product/picture/upload`,
            data: formData,
            headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${tokenb2b}` }
          });
          
          if(respPicture.status === 200){
            try{
              const dropPicture1 = dropFiles[0];
              const dropPicture2 = dropFiles[1];
              const dropPicture3 = dropFiles[2];
              const formDataPictures = new FormData();
              formDataPictures.append("pictures", dropPicture1);
              formDataPictures.append("pictures", dropPicture2);
              formDataPictures.append("pictures", dropPicture3);
              formDataPictures.append("product-id", product_id);
            
              const respPictures = await axios({
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_API_URL}/storage/product/pictures/upload`,
                data: formDataPictures,
                headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${tokenb2b}` }
              });
              if(respPictures.status === 200){
                dispatch(setLoading());
                router.push('/usuario/productos');
              }
            } catch(errors){
                dispatch(setLoading());
                dispatch(showToastify({message:'No se pudo guardar, intentelo más tarde', severity:'error'}));
            }
          }
      } catch(erro){
        dispatch(setLoading());
        dispatch(showToastify({message:'No se pudo guardar, intentelo más tarde', severity:'error'}));
      }

    }

  } catch(err){
    dispatch(setLoading());
    dispatch(showToastify({message:'No se pudo guardar, intentelo más tarde', severity:'error'}));
   }
  }

  const initialValues = {
    name: "",
    product_category_id: 0,
    price: 0,
    stock: 0,
    description:"",
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("El nombre del producto es obligatorio"),
    product_category_id: yup.number().min(1, 'Debe seleccionar una categoría').required("Debe seleccionar la categoría de su producto"),
    price: yup.number().min(1, 'El precio no puede ser 0').
    test('no-leading-zero', 'Un numero no puede empezar en 0',
      (value, context) => {
        return context.originalValue && !context.originalValue.startsWith('0');
      }
    ).
    test("maxDigitsAfterDecimal",
      "El precio debe tener obligatoriamente maximo 1 o 2 decimales. Ejemplo: 20.5 o 20.50",
      (price) => /^\d+(\.\d{0,2})?$/.test(price)
      ).required("El precio del producto debe ser ingresado"),

    stock: yup.number().required("El stock para la venta del producto es requerido"),
    description: yup.string().required("La descripción del producto es obligatoria"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    onSubmit: saveProduct,
    validationSchema: formSchema,
  });

  return {
     values, errors, touched, handleBlur, handleChange, handleSubmit,
     onSelectFile, selectedImage, onDragDropFiles, dropFiles,
     productAvailable, setProductAvailable, isUnlimited, setIsUnlimited,
     loading
  };
};

