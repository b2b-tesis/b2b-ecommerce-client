import axios from "axios";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading } from "../../../../common/state/loading/loadingSlice";
import { showToastify } from "../../../../common/state/toast/toastSlice";

export const usePayOrder = () => {

  const [openAddressModal, setOpenAddressModal] = useState(false);
  const toggleAddressModal = useCallback(() => {setOpenAddressModal((open) => !open)}, []);

  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const togglePaymentModal = useCallback(() => {setOpenPaymentModal((open) => !open)}, []);

  const dispatch = useDispatch();
  const router = useRouter();
  const {id} = router.query;
  const {loading} = useSelector((state) => (state.loading))

  const updateStatusCancelled = async () => {
    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/ordenes/${id}`;
      router.replace(destination);
      return
    }
   try{
    dispatch(setLoading());
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    const resp = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`, {status:"cancelled"}, config);
      if(resp.status === 200){
        dispatch(setLoading());
        router.push('/usuario/ordenes');
      }
    
  } catch(err){
    dispatch(setLoading());
    dispatch(showToastify({message:'No se pudo guardar, intentelo mas tarde', severity:'error'}));
   }
  }

  const updateStatusPending = async () => {
    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/ordenes/${id}`;
      router.replace(destination);
      return
    }
   try{
    dispatch(setLoading());
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    const resp = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`, {status:"pending"}, config);
      if(resp.status === 200){
        dispatch(setLoading());
        router.push('/usuario/ordenes');
      }
    
  } catch(err){
    dispatch(setLoading());
    dispatch(showToastify({message:'No se pudo guardar, intentelo mas tarde', severity:'error'}));
   }
  
  }

  return {
    openAddressModal, toggleAddressModal,
    openPaymentModal, togglePaymentModal,
    updateStatusCancelled, loading, updateStatusPending
  };
};

