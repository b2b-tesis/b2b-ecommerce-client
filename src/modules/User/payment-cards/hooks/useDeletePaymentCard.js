import { useCallback, useState } from "react";

export const useDeletePaymentCard = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const toggleDialog = useCallback(() => {setOpenDialog((open) => !open)}, []);

  const deletePaymentCard = () => {
    let idElement = idToDelete;
    console.log(idElement);
  }

  return {
    toggleDialog, openDialog, deletePaymentCard, setIdToDelete
  };
};

