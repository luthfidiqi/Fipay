import "../styles/globals.css";
import "../styles/auth.css";
import "../styles/navbar.css";
import "../styles/landing.css";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.css";

import Script from "next/script";

import { Provider } from "react-redux";
import { store } from "../stores";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
    </Provider>
  );
}

export default MyApp;
