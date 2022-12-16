import {useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, setOrder, setProductToEdit, setTotal } from "../../../../common/state/order/orderSlice";

export const useAcceptOrder = (order) => {

  const [openDialog, setOpenDialog] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const toggleDialog = useCallback(() => {setOpenDialog((open) => !open)}, []);

  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => {setOpenModal((open) => !open)}, []);

  const dispatch = useDispatch();
  const {orderItems, total} = useSelector((state) => (state.order))
  

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

  useEffect(() => {
    getAndSetOrder();
  },[])

  return {
    toggleDialog, openDialog, deleteProductFromOrder, setIdToDelete,
    orderItems, total,
    setProductEdit, toggleModal, openModal
  };
};

