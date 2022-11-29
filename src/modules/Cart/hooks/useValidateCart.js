import {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookie from 'js-cookie';
import { useEffect } from "react";
import axios from "axios";


export const useValidateCart = () => {

  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const {cart} = useSelector((state) => (state.cart));

  const validateCart = async () => {

    const cookieIdProducts = Cookie.get('cartidb2b') && JSON.parse( Cookie.get('cartidb2b') );

    try{

    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product/shopping-car`, {
      product_ids:cookieIdProducts
    });
    console.log(data);
    setProducts(data.data.results);
    }catch(err){
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((accum, item) => accum + item.priceProduct * item.quantityProduct, 0);
  };


  useEffect(() => {
    validateCart(); 
  }, [])

  return {
    products,
    cart,
    getTotalPrice
  };
};

