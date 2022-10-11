import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setLoading2 } from "../../../../common/state/loading/loadingSlice";
import { showToastify } from "../../../../common/state/toast/toastSlice";

export const useEditImagesProfile = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedAvatar, setSelectedAvatar] = useState([]);
  const [selectedBanner, setSelectedBanner] = useState([]);
  const {loading2} = useSelector((state) => (state.loading));

  const handleSelectedFile = async (id, selectedFiles, ruc) => {

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
          headers: {'Content-Type': 'multipart/form-data' }
        });
        
        if(resp.status === 200){
          dispatch(setLoading2());
          router.push('/usuario/perfil/editar');
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
            headers: {'Content-Type': 'multipart/form-data' }
          });
          
          if(resp.status === 200){
            dispatch(setLoading2());
            router.push('/usuario/perfil/editar');
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

