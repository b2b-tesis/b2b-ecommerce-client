import {useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { deleteProduct, setOrder, setProductToEdit, setTotal } from "../../../../common/state/order/orderSlice";
import { setLoading } from "../../../../common/state/loading/loadingSlice";
import axios from "axios";

export const useAcceptOrder = (order) => {

  const [openDialog, setOpenDialog] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const toggleDialog = useCallback(() => {setOpenDialog((open) => !open)}, []);

  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => {setOpenModal((open) => !open)}, []);

  const dispatch = useDispatch();
  const {orderItems, total} = useSelector((state) => (state.order));
  const {loading} = useSelector((state) => (state.loading))

  const router = useRouter();
  const {id} = router.query;

  

  const getAndSetOrder = () =>{
    dispatch(setOrder(order));
    dispatch(setTotal());
  }

  const deleteProductFromOrder = () => {
    dispatch(deleteProduct(idToDelete));
    dispatch(setTotal());
    toggleDialog();
  }

  const setProductEdit = (idToEdit) => {
    dispatch(setProductToEdit(idToEdit));
  }

  const acceptOrder = async () =>{
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
    const resp = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/order/items/${id}`, orderItems, config);

    if(resp.status === 200){
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`, {status:"accepted"}, config);
      if(response.status === 200){
        dispatch(setLoading());
        router.push('/usuario/ordenes-venta');
      }
    }
  } catch(err){
    dispatch(setLoading());
    dispatch(showToastify({message:'No se pudo guardar, intentelo mas tarde', severity:'error'}));
   }
  }

  useEffect(() => {
    getAndSetOrder();
  },[])

  return {
    toggleDialog, openDialog, deleteProductFromOrder, setIdToDelete,
    orderItems, total,
    setProductEdit, toggleModal, openModal,
    acceptOrder,
    loading
  };
};

