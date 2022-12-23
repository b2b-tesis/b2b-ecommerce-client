import axios from "axios";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading } from "../../../../common/state/loading/loadingSlice";
import { showToastify } from "../../../../common/state/toast/toastSlice";

export const useShipOrder = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const {id} = router.query;
  const {loading} = useSelector((state) => (state.loading))

  const updateStatusShipped = async () => {
    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/ordenes-venta/${id}`;
      router.replace(destination);
      return
    }
   try{
    dispatch(setLoading());
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    const resp = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`, {status:"shipped"}, config);
      if(resp.status === 200){
        dispatch(setLoading());
        router.push('/usuario/ordenes-venta');
      }
    
  } catch(err){
    dispatch(setLoading());
    dispatch(showToastify({message:'No se pudo guardar, intentelo mas tarde', severity:'error'}));
   }
  }

  return {
    updateStatusShipped, loading
  };
};

