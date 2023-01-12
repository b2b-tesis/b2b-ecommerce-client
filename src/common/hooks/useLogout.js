import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';
import { useRouter } from "next/router";

export const useLogout = () => {


  const router = useRouter();

  const logoutUser = () => {
    Cookies.remove('tokenb2b');
    Cookies.remove('cartidb2b');
    Cookies.remove('cartb2b');
    Cookies.remove('rucb2b');
    // router.replace('/');
    router.reload();
  } 

  return {
    logoutUser
  };
};