import {useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
import { setLoading } from "../../../../common/state/loading/loadingSlice";
import { getRucB2B } from "../../../../common/helpers/getCookies";

export const useListCategoryProducts = () => {

  const dispatch = useDispatch();
  const router = useRouter();

  const [categoryProductsResult, setCategoryProductsResult] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const {loading} = useSelector((state) => (state.loading))
  let totalLength = categoryProductsResult.total_results;

  const getCategoryProducts = async () => {

    let rucb2b = getRucB2B();
    if(rucb2b === ''){
      const destination = '/login?p=/usuario/categorias-productos';
      router.replace(destination);
      return
    }
    try{
      dispatch(setLoading());
      const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/product-category?ruc=${rucb2b}&limit=5&page=${page}`)
      const {data} = resp.data;
      setCategoryProductsResult(data);
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
    getCategoryProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page])

  return {
    categoryProductsResult,
    totalPages,
    handleCurrentlyPage,
    page,
    totalLength,
    loading
  };
};

