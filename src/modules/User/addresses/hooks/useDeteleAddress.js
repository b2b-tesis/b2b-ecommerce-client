import { useCallback, useState } from "react";

export const useDeleteAddress = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const toggleDialog = useCallback(() => {setOpenDialog((open) => !open)}, []);

  const deleteAddress = () => {
    let idElement = idToDelete;
    //al eliminar el elemento, llamar al loading de redux y en el componente dialogo deshabilitar el boton cancelar, 
    //colocar el spin en el boton eliminar y colocar en null el prop onClose en Dialog, cuando acabe la respuesta redireccionar a
    //la pagina de listado de direcciones
    console.log(idElement);
  }

  return {
    toggleDialog, openDialog, deleteAddress, setIdToDelete
  };
};

