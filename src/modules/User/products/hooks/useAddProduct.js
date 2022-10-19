import * as yup from "yup";
import { useFormik } from "formik";

export const useAddProduct = () => {

  const saveProduct = () =>{
    console.log(values);
  }

  const initialValues = {
    name: "",
    category: "",
    price: "",
    stock: "",
    // sale_price: "",
    // description: "",
    // tags: "",
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("required"),
    category: yup.string().required("required"),
    description: yup.string().required("required"),
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
     values, errors, touched, handleBlur, handleChange, handleSubmit
  };
};

