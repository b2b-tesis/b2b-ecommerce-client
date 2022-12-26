import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { getTokenB2B } from "../../../../common/helpers/getCookies";
import { setLoading } from "../../../../common/state/loading/loadingSlice";
import { showToastify } from "../../../../common/state/toast/toastSlice";

export const useShipOrder = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const {id} = router.query;
  const {loading} = useSelector((state) => (state.loading))

  const updateStatusShipped = async () => {
    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/ordenes-venta/${id}`;
      router.replace(destination);
      return
    }
   try{
    dispatch(setLoading());
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    const resp = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`, {status:"shipped"}, config);
      if(resp.status === 200){
        dispatch(setLoading());
        router.push('/usuario/ordenes-venta');
      }
    
  } catch(err){
    dispatch(setLoading());
    dispatch(showToastify({message:'No se pudo guardar, intentelo mas tarde', severity:'error'}));
   }
  }

  const uploadPDF = async (selectedFile) => {
    if(selectedFile[0]?.type === 'application/pdf'){

      let tokenb2b = getTokenB2B();
      if(tokenb2b === ''){
        const destination = `/login?p=/usuario/ordenes-venta/${id}`;
        router.replace(destination);
        return
      }

       try{
        dispatch(setLoading());
        const filePdf = selectedFile[0];
        const formData = new FormData();
        formData.append("user-file", filePdf);

        const resp = await axios({
          method: 'put',
          url: `${process.env.NEXT_PUBLIC_API_URL}/order/upload-file/${id}`,
          data: formData,
          headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${tokenb2b}` }
        });
        
        if(resp.status === 200){
          dispatch(setLoading());
          router.reload();
        }
       } catch(err){
        dispatch(setLoading());
        dispatch(showToastify({message:'No se pudo guardar, intentelo más tarde', severity:'error'}));
       }

        return;
      
    } else {
      dispatch(showToastify({message:'Solo puede subir un archivo .pdf', severity:'error'}));
    }
  }

  return {
    updateStatusShipped, loading, uploadPDF
  };
};

