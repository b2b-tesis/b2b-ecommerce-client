import * as yup from "yup";
import "yup-phone-lite";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
// import { setLoading } from "../../../common/state/loading/loadingSlice";

export const useLogin = () => {

  const dispatch = useDispatch();
  // const {loading} = useSelector((state) => (state.loading))
  const handleFormSubmit = (values) => {
    // dispatch(setLoading());
    console.log(values);
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
    values, errors, touched, handleBlur, handleChange, handleSubmit
  };
};

