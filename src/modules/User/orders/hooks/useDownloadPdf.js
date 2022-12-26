import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch} from "react-redux";

import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading } from "../../../../common/state/loading/loadingSlice";
import { showToastify } from "../../../../common/state/toast/toastSlice";

export const useDownloadPdf = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const {id} = router.query;

  const downloadPdf = async () => {
    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/ordenes/${id}`;
      router.replace(destination);
      return
    }
   try{
    const response = await axios({
      url:`${process.env.NEXT_PUBLIC_API_URL}/order/download-file/${id}`,
      method: 'GET',
      responseType: 'blob',
      headers: {Authorization: `Bearer ${tokenb2b}` }
   })

      if(response.status === 200){
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "boletaVenta.pdf"); 
        link.click();
      }

  } catch(err){
    dispatch(showToastify({message:'No se pudo descargar el PDF, intentelo mas tarde', severity:'error'}));
   }
  }

  

  return {
    downloadPdf
  };
};

