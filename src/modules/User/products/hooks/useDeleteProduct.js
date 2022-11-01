import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading } from "../../../../common/state/loading/loadingSlice";

export const useDeleteProduct = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const toggleDialog = useCallback(() => {setOpenDialog((open) => !open)}, []);
  const router = useRouter();
  const dispatch = useDispatch();

  const deleteProduct = async () => {
    let idElement = idToDelete;
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
    
    const resp = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/product/${idElement}`,config);
    if(resp.status === 200){
      dispatch(setLoading());
      router.reload();
    }
  } catch(err){
    dispatch(setLoading());
    router.reload();
   }
  }

  return {
    toggleDialog, openDialog, deleteProduct, setIdToDelete
  };
};

