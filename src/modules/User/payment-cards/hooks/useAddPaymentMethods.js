import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import valid from "card-validator";
import { useRouter } from "next/router";
import axios from "axios";

import { showToastify } from "../../../../common/state/toast/toastSlice";
import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading } from "../../../../common/state/loading/loadingSlice";

export const useAddPaymentMethods = () => {

  const dispatch = useDispatch();
  const {loading} = useSelector((state) => (state.loading))
  const router = useRouter();

  const showErrorAddPayment = (event) => {
    event.preventDefault();
    dispatch(showToastify({message:'No puede agregar más tarjetas de pago', severity:'error'}))
  }

  const savePaymentMethods = async () => {
    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = '/login?p=/usuario/tarjetas/agregar';
      router.replace(destination);
      return
    }
   try{
    dispatch(setLoading());
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/payment-methods`, values, config);

    if(resp.status === 201){
      dispatch(setLoading());
      router.push('/usuario/tarjetas');
    }
  } catch(err){
    dispatch(setLoading());
    dispatch(showToastify({message:'No se pudo guardar, intentelo más tarde', severity:'error'}));
   }
  }


  const initialValues = {
    card_number: "",
    name_on_card: "",
    exp_date: "",
    cvc: "",
  };
  const formSchema = yup.object().shape({
    card_number: yup.string().test(
      "test-number",
      "Número de la tarjeta es inválido",
      value => valid.number(value).isValid
    ).required("Debe ingresar el número de una tarjeta"),
    name_on_card: yup.string().required("Debe ingresar el nombre del titular de la tarjeta"),
    exp_date: yup.string().required("Debe ingresar la fecha de vencimiento de la tarjeta"),
    cvc: yup.string().required("Debe ingresar el código cvc de la tarjeta")
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: savePaymentMethods,
      validationSchema: formSchema,
    });

  return {
    showErrorAddPayment,
    values, errors, touched, handleBlur, handleChange, handleSubmit,
    loading
  };
};

