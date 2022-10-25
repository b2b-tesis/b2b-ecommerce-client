import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";

import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading } from "../../../../common/state/loading/loadingSlice";
import { showToastify } from "../../../../common/state/toast/toastSlice";
import axios from "axios";

export const useEditCategoryProduct = () => {

  const dispatch = useDispatch();
  const {loading} = useSelector((state) => (state.loading))
  const router = useRouter();
  const {id} = router.query;


  const saveCategoryProduct = async () => {
    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/categorias-productos/${id}`;
      router.replace(destination);
      return
    }
   try{
    dispatch(setLoading());
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    const resp = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/product/product-category/${id}`, values, config);

    if(resp.status === 200){
      dispatch(setLoading());
      router.push('/usuario/categorias-productos');
    }
  } catch(err){
    dispatch(setLoading());
    dispatch(showToastify({message:'No se pudo guardar, intentelo más tarde', severity:'error'}));
   }
  }


  const initialValues = {
    name: ""
  };
  const formSchema = yup.object().shape({
    name: yup.string().required("Debe ingresar un nombre para la categoría de producto"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: saveCategoryProduct,
      validationSchema: formSchema,
    });


  return {
    initialValues, values, errors, touched, handleBlur, handleChange, handleSubmit, loading
  };
};

