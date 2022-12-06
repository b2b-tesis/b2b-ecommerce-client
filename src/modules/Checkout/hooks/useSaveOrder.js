import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookie from 'js-cookie';

import { setLoading } from "../../../common/state/loading/loadingSlice";
import { showToastify } from "../../../common/state/toast/toastSlice";
import axios from "axios";
import { getRucB2B, getTokenB2B } from "../../../common/helpers/getCookies";
import { getTotalPrice } from "../../../common/helpers/getTotalPrice";
import { deleteCart } from "../../../common/state/cart/cartSlice";

export const useSaveOrder = () => {

  const [address, setAddress] = useState({});
  const [payment, setPayment] = useState({});
  const [products, setProducts] = useState([]);

  const {cart} = useSelector((state) => (state.cart));
  const {loading} = useSelector((state) => (state.loading));

  const dispatch = useDispatch();
  const router = useRouter();


  const saveOrder = async () => {
    if(Object.keys(address).length === 0 || Object.keys(payment).length === 0){
      dispatch(showToastify({message:'Debe seleccionar 1 dirección y 1 tarjeta para guardar la orden', severity:'error'}));
      return
    }
  
    try{
      let tokenb2b = getTokenB2B();
      let rucb2b = getRucB2B();
      if(tokenb2b === ''){
        const destination = '/login?p=/verificacion';
        router.replace(destination);
        return
      }

      if(rucb2b === ''){
        const destination = '/login?p=/verificacion';
        router.replace(destination);
        return
      }

      const config = {
        headers: { Authorization: `Bearer ${tokenb2b}` }
      };

      const items = products.map((product) => {
       let prod = cart.filter((carItem) => carItem.idProduct === product.id);
       return {amount:Number(prod[0].quantityProduct), product}
      });

      const totalPriceItems = getTotalPrice(cart);
      dispatch(setLoading());

      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
        buyer_id: rucb2b,
        seller_id:cart[0].userRuc,
        status:"created",
        delivery_address:{
          address: address.address_line,
          phone: address.phone.toString(),
          pseudonym: address.name
        },
        payment_details:payment,
        items,
        sub_total:totalPriceItems,
        total:totalPriceItems
          }, config);
          
          dispatch(setLoading());
          dispatch(deleteCart());
        router.replace(`/usuario/ordenes/${data.data.results.id}`);
    }catch(err){
      dispatch(setLoading());
      dispatch(showToastify({message:'No se pudo guardar, intentelo más tarde', severity:'error'}));
    }
      
  }

  const getCartProductsData = async () => {
    const cookieIdProducts = Cookie.get('cartidb2b') && JSON.parse( Cookie.get('cartidb2b') );

    try{

    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product/shopping-car`, {
      product_ids:cookieIdProducts
    });
    setProducts(data.data.results);
    }catch(err){
    }
  }

  useEffect(() => {
    getCartProductsData();
  },[])

  return {
    address, setAddress,
    payment, setPayment,
    saveOrder,
    loading
  };
};

