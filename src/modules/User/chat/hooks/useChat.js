import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { getRucB2B } from "../../../../common/helpers/getCookies";
import { setLoading } from "../../../../common/state/loading/loadingSlice";
import { showToastify } from "../../../../common/state/toast/toastSlice";
import { convertToMiliseconds } from "../../../../common/helpers/convertToMiliseconds";
import { setMessages, setNewMessage } from "../../../../common/state/chat/chatSlice";

export const useChat = (idOrder) => {

  const dispatch = useDispatch();
  const {loading} = useSelector((state) => (state.loading));
  const {messages} = useSelector((state) => (state.chat))

  const router = useRouter();
  const {id} = router.query;

  const [message, setMessage] = useState('');
  let rucb2b = getRucB2B();


  const formatMessages = (data) => {
    if(rucb2b === '' || rucb2b === null || rucb2b === undefined){
      const destination = `/login?p=/usuario/chat/${id}`;
      router.replace(destination);
      return
    }
    let orderMessages = data?.results.map((mess) => {
      if(mess.ruc === rucb2b){
        return {message:mess.message, isOut:true, time:convertToMiliseconds(mess.time)}
      }else{
        return {message:mess.message, isOut:false, time:convertToMiliseconds(mess.time)}
      }
    });
    dispatch(setMessages(orderMessages));
  }

  const loadMessages = async () =>{
    try{
     if(idOrder !== undefined){
      dispatch(setLoading());
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/chat/${id}`);
      if(data === undefined || data.length === 0){
        return
      }else{
        formatMessages(data.data);
      }
      dispatch(setLoading());
     }
    }catch(error){
      dispatch(setLoading());
    }
  }

  const sendUploadMessage = async () => {
    if(message === ''){
      dispatch(showToastify({message:'Error al enviar mensaje, está vacío', severity:'error'}));
      return
    }
    let rucb2b = getRucB2B();
    if(rucb2b === ''){
      const destination = `/login?p=/usuario/chat/${id}`;
      router.replace(destination);
      return
    }

    try{
      dispatch(setLoading());
      const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/chat/${id}`, {
        message:message,
        ruc:rucb2b.toString()
      })
      if(resp.status === 204) {
        dispatch(setNewMessage({message:message, isOut:true}));
      }
      
      dispatch(setLoading());
      
    }catch(error){
     dispatch(setLoading());
     dispatch(showToastify({message:'Error al enviar mensaje, intentelo más tarde', severity:'error'}));
    }
    setMessage('');
  }

  useEffect(() => {
    loadMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  return {
    message, setMessage, sendUploadMessage, loading, 
    messages
  };
};

