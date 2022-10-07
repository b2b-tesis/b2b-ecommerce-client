import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";

import { showToastify } from "../../../../common/state/toast/toastSlice";
import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading } from "../../../../common/state/loading/loadingSlice";
import axios from "axios";
import { useRouter } from "next/router";

export const useEditAddress = () => {

  const dispatch = useDispatch();
  const {loading} = useSelector((state) => (state.loading))
  const router = useRouter();
  const {id} = router.query;

  const editAddress = async () => {
    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/direcciones/${id}`;
      router.replace(destination);
      return
    }
   try{
    dispatch(setLoading());
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    const resp = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/user/address/${id}`, values, config);

    if(resp.status === 200){
      dispatch(setLoading());
      router.push('/usuario/direcciones');
    }
  } catch(err){
    dispatch(setLoading());
    dispatch(showToastify({message:'No se pudo guardar, intentelo más tarde', severity:'error'}));
   }
  }


  const initialValues = {
    name: "",
    address_line: "",
    phone: "",
  };
  const formSchema = yup.object().shape({
    name: yup.string().required("Debe ingresar un seudónimo a la dirección"),
    address_line: yup.string().required("Debe ingresar la dirección"),
    phone: yup.string().required("Debe agregar un teléfono a la dirección (Puede ser el mismo teléfono de su cuenta principal)")
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      // enableReinitialize: true,
      // mapPropsToValues:() => ({name:'asdasd'}),
      onSubmit: editAddress,
      validationSchema: formSchema,
    });

  return {
    initialValues, values, errors, touched, handleBlur, handleChange, handleSubmit, loading
  };
};

