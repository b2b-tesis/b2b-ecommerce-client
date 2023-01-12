import { useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { setUser } from "../../../common/state/auth/authSlice";

export const useAuthenticateUser = () => {

  const dispatch = useDispatch();

  const checkToken = async () => {
  let tokenb2b = Cookies.get('tokenb2b');
  if(!tokenb2b){
    return;
  }
  
  const config = {
    headers: { Authorization: `Bearer ${tokenb2b}` }
  };
  
  try{
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`, config);
      Cookies.set('tokenb2b', data.data.token );
      dispatch(setUser(data.data.user))  
    }catch(err){
      Cookies.remove('tokenb2b');
    }
  }

  useEffect(() => {
    checkToken();
  },[])
  return{
    
  }
}