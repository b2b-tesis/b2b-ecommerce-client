import {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAndUpdateProduct, setAddToCart } from "../../../common/state/cart/cartSlice";
import { showToastify } from "../../../common/state/toast/toastSlice";


export const useAddToCart = () => {

  const [quantityProduct, setQuantityProduct] = useState(0);

  const dispatch = useDispatch();
  const {cart} = useSelector((state) => (state.cart))

  const addProductToCart = (product) => {
    let productInCart = cart.find( p => p.idProduct === product.id );
    let otherUser = cart.find(p => p.userRuc  !== product.user_ruc);
    
    let productCart = {
      idProduct:product.id,
      quantityProduct,
      priceProduct:product.price,
      name:product.name,
      userRuc:product.user_ruc,
      userName:product.user_name
    }
    

  if(!otherUser){
    if(productInCart){
      dispatch(removeAndUpdateProduct(productCart));
      dispatch(showToastify({message:'Cantidad actualizada correctamente', severity:'success'}));
    }
    if(!productInCart){
      dispatch(setAddToCart(productCart));
      dispatch(showToastify({message:'Producto agregado al carrito correctamente', severity:'success'}));
    }
  }

  if(otherUser){
    dispatch(showToastify({message:`Solo puede agregar productos de ${cart[0]?.userName} por compra (Revise el carrito de compras para comprobar o editar)`, severity:'error'}));
  }

  }

  return {
    addProductToCart,
    quantityProduct, setQuantityProduct
  };
};

