import { Backdrop, CircularProgress } from "@mui/material";
import { H2 } from "../Typography";

const BackDrop = ({loading2, message}) => {

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading2 ? true : false}
    > 
    <H2 sx={{paddingRight:2}}>{message}</H2>
      <CircularProgress color="inherit" />
  </Backdrop>
  )
};

export default BackDrop;
