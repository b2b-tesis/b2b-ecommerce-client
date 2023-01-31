import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading2, setLoading3 } from "../../../../common/state/loading/loadingSlice";

export const useEditOrderAddress = () => {

  const [addressResult, setAddressResult] = useState([]);
  const [address, setAddress] = useState({});

  const dispatch = useDispatch();
  const router = useRouter();
  const {id} = router.query;
  let tokenb2b = getTokenB2B();

  const {loading3, loading2} = useSelector((state) => (state.loading))

  const listAddress = async () => {
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
    const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/address`, config);
    const {data} = resp.data;
    setAddressResult(data);
    dispatch(setLoading2());
  } catch(err){
    dispatch(setLoading2());
   }
  }

  const updateAddress = async (paymentDetails) => {
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
        delivery_address:{
          address: address.address_line,
          phone:address.phone.toString(),
          pseudonym:address.name
        },
        payment_details:paymentDetails
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
    listAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return {
    addressResult, address, setAddress,
    updateAddress,
    loading3, loading2
  };
};

