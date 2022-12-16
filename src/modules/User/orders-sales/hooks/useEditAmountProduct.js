import {useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, setEditAmountProduct, setEmptyProductEdit, setOrder, setProductToEdit, setTotal } from "../../../../common/state/order/orderSlice";

export const useEditAmountProduct = () => {

  const [quantityProduct, setQuantityProduct] = useState(0);
  const dispatch = useDispatch();

  const editAmountProduct = (productId) => {
    dispatch(setEditAmountProduct({productId, quantityProduct}));
    setQuantityProduct(0);
    dispatch(setTotal());
    dispatch(setEmptyProductEdit());

  }

  return {
   quantityProduct, setQuantityProduct, editAmountProduct
  };
};

