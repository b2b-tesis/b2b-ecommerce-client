import "../../styles/globals.css";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import { Provider } from "react-redux";

import "simplebar/dist/simplebar.min.css";
import "nprogress/nprogress.css";

import MuiTheme from "../common/theme/MuiTheme";
import { AppProvider } from "../common/contexts/AppContext";
import store from "../common/state/store";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done()); // small change

nProgress.configure({
  showSpinner: false,
});

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Bazaar - Marketplace B2B</title>
        <meta
          name="description"
          content="Marketplace B2B para las MYPES de Tacna - Peru"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>

      <Provider store={store}>
        <AppProvider>
          <MuiTheme>
            <Component {...pageProps} />
          </MuiTheme>
        </AppProvider>
      </Provider>
    </>
  );
}

export default MyApp;
