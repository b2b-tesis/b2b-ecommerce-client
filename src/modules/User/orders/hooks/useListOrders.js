import {useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { getRucB2B, getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading } from "../../../../common/state/loading/loadingSlice";

export const useListOrders = () => {

  const dispatch = useDispatch();
  const router = useRouter();

  const [ordersResult, setOrdersResult] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const {loading} = useSelector((state) => (state.loading))
  let totalLength = ordersResult.total_results;

  const getOrders = async () => {

    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = '/login?p=/usuario/ordenes';
      router.replace(destination);
      return
    }

    let rucb2b2 = getRucB2B();
    if(rucb2b2 === ''){
      const destination = '/login?p=/usuario/ordenes';
      router.replace(destination);
      return
    }

   try{
    dispatch(setLoading());
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
      const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/pagination?limit=1&page=${page}&buyerID=${rucb2b2}`, config)
      const {data} = resp.data;
      setOrdersResult(data);
      setTotalPages(data?.total_page);
      dispatch(setLoading());
    } catch(err){
      dispatch(setLoading());
      router.replace('/log in?p=/usuario/ordenes');
    }
  }

  const handleCurrentlyPage = (currentlyPage) => {

    window.scroll(0,0);
    setPage(Number(currentlyPage));
  }

  useEffect(() => {
    getOrders();
  },[page])


  return {
    ordersResult,
    totalPages,
    handleCurrentlyPage,
    page,
    totalLength,
    loading
  };
};

