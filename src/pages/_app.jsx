import "../../styles/globals.css";
import { CssBaseline } from "@mui/material";
import MuiTheme from "../common/theme/MuiTheme";

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <MuiTheme>
        <Component {...pageProps} />
      </MuiTheme>
    </>
  );
}

export default MyApp;
