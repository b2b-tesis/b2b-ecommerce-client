import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCart } from "../state/cart/cartSlice";

export const useCart = () => {

  const dispatch = useDispatch();
  const {cart} = useSelector((state) => (state.cart))


useEffect(() => {
  dispatch(setCart());
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return {
    cart
  };
};

