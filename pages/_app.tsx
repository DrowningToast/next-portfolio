import "../styles/_globals.scss";
import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import TagManager from "react-gtm-module";
// import { useEffect } from "react";

library.add(fas);

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   if (!process.env.NEXT_PUBLIC_TAG_ID)
  //     return console.log("Missing Google Tag ID");
  //   TagManager.initialize({
  //     gtmId: process.env.NEXT_PUBLIC_TAG_ID,
  //   });
  // }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
