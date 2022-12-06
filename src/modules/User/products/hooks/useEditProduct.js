import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";

import { showToastify } from "../../../../common/state/toast/toastSlice";
import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading } from "../../../../common/state/loading/loadingSlice";

export const useEditProduct = (is_unlimited, is_available) => {

  const [productAvailable, setProductAvailable] = useState(false);
  const [isUnlimited, setIsUnlimited] = useState(false);

  const dispatch = useDispatch();
  const {loading} = useSelector((state) => (state.loading))
  const router = useRouter();
  const {id} = router.query;

  const editAddress = async () => {
    const {price, ...valuesProduct} = values;

    if(isUnlimited){
      valuesProduct.stock = 0
    }
    valuesProduct.price = Number(values.price);
    valuesProduct.is_available = productAvailable;
    valuesProduct.is_unlimited = isUnlimited;

    let tokenb2b = getTokenB2B();

    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/productos/${id}`;
      router.replace(destination);
      return
    }
   try{
    dispatch(setLoading());
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    const resp = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, valuesProduct, config);

    if(resp.status === 201){
      dispatch(setLoading());
      router.push('/usuario/productos');
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
      onSubmit: editAddress,
      validationSchema: formSchema,
    });

    useEffect(() => {
      setIsUnlimited(is_unlimited);
  setProductAvailable(is_available);
    },[])

  return {
    initialValues, values, errors, touched, handleBlur, handleChange, handleSubmit, loading,
    productAvailable, setProductAvailable, isUnlimited, setIsUnlimited,

  };
};

