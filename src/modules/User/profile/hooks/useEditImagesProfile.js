import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getTokenB2B } from "../../../../common/helpers/getCookies";

import { setLoading2 } from "../../../../common/state/loading/loadingSlice";
import { showToastify } from "../../../../common/state/toast/toastSlice";

export const useEditImagesProfile = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const {loading2} = useSelector((state) => (state.loading));

  const handleSelectedFile = async (id, selectedFiles, ruc) => {

    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/perfil/editar`;
      router.replace(destination);
      return
    }

    if(selectedFiles[0].type === 'image/jpeg' || selectedFiles[0].type === 'image/png'){

      if(id === 'avatar'){

       try{
        dispatch(setLoading2());
        const fileAvatar = selectedFiles[0];
        const formData = new FormData();
        formData.append("user-picture", fileAvatar);
        formData.append("user-ruc", ruc)

        const resp = await axios({
          method: 'post',
          url: `${process.env.NEXT_PUBLIC_API_URL}/storage/user/picture/upload`,
          data: formData,
          headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${tokenb2b}` }
        });
        
        if(resp.status === 200){
          dispatch(setLoading2());
          router.reload();
        }
       } catch(err){
        dispatch(setLoading2());
        dispatch(showToastify({message:'No se pudo guardar, intentelo más tarde', severity:'error'}));
       }

        return;
      }

      if(id === 'banner'){

        try{
          dispatch(setLoading2());
          const fileBanner = selectedFiles[0];
          const formData = new FormData();
          formData.append("user-banner", fileBanner);
          formData.append("user-ruc", ruc)
  
          const resp = await axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/storage/user/banner/upload`,
            data: formData,
            headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${tokenb2b}` }
          });
          
          if(resp.status === 200){
            dispatch(setLoading2());
            router.reload();
          }
         } catch(err){
          dispatch(setLoading2());
          dispatch(showToastify({message:'No se pudo guardar, intentelo más tarde', severity:'error'}));
         }
         
        return;
      }
      
    } else {
      dispatch(showToastify({message:'Solo puede subir un archivo .jpeg o .png', severity:'error'}));
    }

  }


  return {
    handleSelectedFile, loading2
  };
};

