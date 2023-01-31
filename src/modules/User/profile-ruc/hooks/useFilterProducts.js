import {useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { setLoading } from "../../../../common/state/loading/loadingSlice";
import { setProductResult } from "../../../../common/state/product/productSlice";
import { showToastify } from "../../../../common/state/toast/toastSlice";

export const useFilterProducts = () => {

  
  const [productCategories ,setProductCategories] = useState([]);
  const [rated ,setRated] = useState([]);
  const [isUnlimited, setIsUnlimited] = useState(false);
  const [isLimited, setIsLimited] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const {productResult} = useSelector((state) => (state.product))
  let totalLength = productResult.total_results;

  const dispatch = useDispatch();
  const router = useRouter();
  const {ruc} = router.query;

  const getProducts = async () => {
    try{
        dispatch(setLoading());
        const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product/users/filter?ruc=${ruc}&limit=9&page=${page}`, {
          min_price: Number(minPrice),
          max_price: Number(maxPrice),
          is_unlimited: isUnlimited,
          is_limited: isLimited,
          rated: rated,
          categories: productCategories
        })
        const {data} = resp.data;
        dispatch(setProductResult(data));
        setTotalPages(data?.total_page);
        dispatch(setLoading());
      } catch(err){
        dispatch(setLoading());
        dispatch(showToastify({message:'Ocurrió un error al realizar la búsqueda', severity:'error'}));
      }
  }

  const filterByCategoryProduct = (e) => {
    if(e.target.checked === false){
      setProductCategories(categorie => categorie.filter(cat => cat != e.target.value))
    }else{
      setProductCategories( cat => [...cat, Number(e.target.value)])
    }
  }

  const filterByRate = (e) => {
    if(e.target.checked === false){
      setRated(rated => rated.filter(rat => rat != e.target.value))
    }else{
      setRated( rat => [...rat, Number(e.target.value)])
    }
  }

  const filterByStock = (e) =>{
    if(e.target.value === 'Limitado'){
      setIsLimited(e.target.checked);
    }
    if(e.target.value === 'Ilimitado'){
      setIsUnlimited(e.target.checked);
    }
  }

  const handleCurrentlyPage = (currentlyPage) => {
    window.scroll(0,0);
    setPage(Number(currentlyPage));
  }


  useEffect(()=>{
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productCategories, rated, isUnlimited, isLimited, page]);

  return {
  filterByCategoryProduct,
  filterByRate,
  filterByStock,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  productResult,
  totalPages,
  handleCurrentlyPage,
  page,
  totalLength,
  getProducts
  };
};

