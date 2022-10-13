import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../common/state/loading/loadingSlice";

export const useListByUserCategory = () => {

  const dispatch = useDispatch();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState('desc');

  const {loading} = useSelector((state) => (state.loading))
  let totalLength = searchResult.total_results;

  const searchUsersByCategory = async (id) => {
    try{
      dispatch(setLoading());
      const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}/category?&sort=${sort}&limit=3&page=${page}`)
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
      label: "A-Z",
      value: "A-Z",
    },
    {
      keyFilter:'desc',
      label: "Z-A",
      value: "Z-A",
    },
  ];
  

  return{
    searchUsersByCategory,
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
  }
}