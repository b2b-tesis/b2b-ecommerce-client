import {useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { setLoading } from "../../../../common/state/loading/loadingSlice";
import { getTokenB2B } from "../../../../common/helpers/getCookies";

export const useListProducts = () => {

  const tableHeading = [
    {
      id: "name",
      label: "Name",
      align: "left",
    },
    {
      id: "isAvailable",
      label: "Disponibilidad",
      align: "center",
    },
      {
      id: "category",
      label: "Categoría",
      align: "center",
    },
    {
      id: "action",
      label: "Action",
      align: "center",
    },
  ];

  const dispatch = useDispatch();
  const router = useRouter();

  const [productsResult, setproductsResult] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const {loading} = useSelector((state) => (state.loading))
  let totalLength = productsResult.total_results;

  const getProducts = async () => {

    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = '/login?p=/usuario/productos';
      router.replace(destination);
      return
    }
   try{
    dispatch(setLoading());
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
      const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/users?limit=10&page=${page}`, config)
      const {data} = resp.data;
      setproductsResult(data);
      setTotalPages(data?.total_page);
      dispatch(setLoading());
    } catch(err){
      dispatch(setLoading());
      router.replace('/');
    }
  }

  const handleCurrentlyPage = (currentlyPage) => {

    window.scroll(0,0);
    setPage(Number(currentlyPage));
  }

  useEffect(() => {
    getProducts();
  },[page])


  return {
    tableHeading,
    productsResult,
    totalPages,
    handleCurrentlyPage,
    page,
    totalLength,
    loading
  };
};

