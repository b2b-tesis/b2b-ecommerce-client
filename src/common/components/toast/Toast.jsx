import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeToastify } from "../../state/toast/toastSlice";

const Toast = ({bottom}) => {

  const {toastMessage, showToast, severity} = useSelector((state) => (state.toast))
  const dispatch = useDispatch();
  
  let vertical = 'top';
  let horizontal = 'right';//cambiar la direccion al bottom
  if(bottom){
    vertical = 'bottom';
    vertical = 'left';
  }

  const handleClose = () => {
    dispatch(closeToastify());
  };


 return (
      <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={showToast}
      autoHideDuration={5000}
      onClose={handleClose}
      key={vertical + horizontal}
    >
      {
        severity === 'error' ? 
        (
          <Alert onClose={handleClose} severity='error' sx={{bgcolor: 'rgba(255, 42, 42, 0.8)', color:'white'}} >
            {toastMessage}
          </Alert>
        ) :  severity === 'success' ? (
          <Alert onClose={handleClose} severity='success' sx={{bgcolor: 'rgba(187, 255, 216, 0.8)'}}>
            {toastMessage}
          </Alert>
        ) : null
      }
    </Snackbar>
 )
}
export default Toast;
