import {useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setLoading } from "../../../common/state/loading/loadingSlice";
import { useRouter } from "next/router";

export const useSearchProduct = () => {

  const dispatch = useDispatch();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState('desc');

  const {loading} = useSelector((state) => (state.loading))
  let totalLength = searchResult.total_results;

  const searchProduct = async (searchTerm) => {
    try{
      dispatch(setLoading());
      const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/search?name=${searchTerm}&limit=6&page=${page}&sort=${sort}`)
      const {data} = resp.data;
      setSearchResult(data);
      setTotalPages(data?.total_page);
      dispatch(setLoading());
    } catch(err){
      dispatch(setLoading());
      router.replace('/');
    }
  }

  const handleFilter= (filter) => {
    setSort(filter);
  }
  const handleCurrentlyPage = (currentlyPage) => {

    window.scroll(0,0);
    setPage(Number(currentlyPage));
  }



  const sortOptions = [
    {
      keyFilter:'asc',
      label: "Precio Menor a Mayor",
      value: "Precio Menor a Mayor",
    },
    {
      keyFilter:'desc',
      label: "Precio Mayor a Menor",
      value: "Precio Mayor a Menor",
    },
  ];



  return {
    searchProduct,
    searchResult,
    totalLength,
    
    sortOptions,
    handleCurrentlyPage,
    totalPages,
    setPage,
    page,
    sort,
    handleFilter,
    loading
  };
};

