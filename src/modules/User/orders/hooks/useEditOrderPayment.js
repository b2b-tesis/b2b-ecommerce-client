import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading2, setLoading3 } from "../../../../common/state/loading/loadingSlice";

export const useEditOrderPayment = () => {

  const [paymentResult, setPaymentResult] = useState([]);
  const [payment, setPayment] = useState({});

  const dispatch = useDispatch();
  const router = useRouter();
  const {id} = router.query;
  let tokenb2b = getTokenB2B();

  const {loading3, loading2} = useSelector((state) => (state.loading))

  const listPayment = async () => {
    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/ordenes/${id}`;
      router.replace(destination);
      return
    }
   try{
    dispatch(setLoading2());
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/payment-methods`, config);
    const {data} = resp.data;
    setPaymentResult(data);
    dispatch(setLoading2());
  } catch(err){
    dispatch(setLoading2());
   }
  }

  const updatePayment = async (addressDetails) => {
    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/ordenes/${id}`;
      router.replace(destination);
      return
    }
    try{
      dispatch(setLoading3());
      const config = {
        headers: { Authorization: `Bearer ${tokenb2b}` }
      };
      const resp = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/order/details/${id}`, {
        delivery_address:addressDetails,
        payment_details:payment
      }, config);
      if(resp.status === 200){
        dispatch(setLoading3());
        router.reload();
      }
    } catch(err){
      dispatch(setLoading3());
     }
  }

  useEffect(() => {
    listPayment();
  },[])

  return {
    paymentResult, payment, setPayment,
    updatePayment,
    loading3, loading2
  };
};

