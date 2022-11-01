import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenB2B } from "../../../../common/helpers/getCookies";

import { setLoading2, setLoading3 } from "../../../../common/state/loading/loadingSlice";
import { showToastify } from "../../../../common/state/toast/toastSlice";

export const useEditImagesProduct = () => {

  const [openModal, setOpenModal] = useState(false);
  const [dropFiles, setDropFiles] = useState([]);
  const toggleModal = useCallback(() => {setOpenModal((open) => !open)}, []);

  const dispatch = useDispatch();
  const router = useRouter();
  const {loading2, loading3} = useSelector((state) => (state.loading));


  const handleSelectedFile = async (id, selectedFiles, productId) => {

    let tokenb2b = getTokenB2B();
    if(tokenb2b === ''){
      const destination = `/login?p=/usuario/products/${productId}`;
      router.replace(destination);
      return
    }

    if(selectedFiles[0].type === 'image/jpeg' || selectedFiles[0].type === 'image/png'){

      if(id === 'picture'){
       try{
        dispatch(setLoading2());
        const fileAvatar = selectedFiles[0];
        const formData = new FormData();
        formData.append("product-picture", fileAvatar);
        formData.append("product-id", productId)

        const resp = await axios({
          method: 'post',
          url: `${process.env.NEXT_PUBLIC_API_URL}/storage/product/picture/upload`,
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

  const onDragDropFiles = async (files, productId) => {
    setDropFiles(files);
    if(files.length < 3){
      dispatch(showToastify({message:'Debe subir a la vez 3 archivos .jpg y/o .png', severity:'error'}));
    }

    if(files.length === 3){

      let tokenb2b = getTokenB2B();
      if(tokenb2b === ''){
        const destination = `/login?p=/usuario/productos/${productId}`;
        router.replace(destination);
        return
      }

      try{
        dispatch(setLoading2());
        const dropPicture1 = files[0];
        const dropPicture2 = files[1];
        const dropPicture3 = files[2];
        const formDataPictures = new FormData();
        formDataPictures.append("pictures", dropPicture1);
        formDataPictures.append("pictures", dropPicture2);
        formDataPictures.append("pictures", dropPicture3);
        formDataPictures.append("product-id", productId);
      
        const respPictures = await axios({
          method: 'post',
          url: `${process.env.NEXT_PUBLIC_API_URL}/storage/product/pictures/upload`,
          data: formDataPictures,
          headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${tokenb2b}` }
        });
        if(respPictures.status === 200){
          dispatch(setLoading2());
          router.reload();
        }
      } catch(err){
          dispatch(setLoading2());
          dispatch(showToastify({message:'No se pudo guardar, intentelo más tarde', severity:'error'}));
      }
    }
  }


  return {
    handleSelectedFile, loading2, openModal, toggleModal, dropFiles, onDragDropFiles
  };
};

