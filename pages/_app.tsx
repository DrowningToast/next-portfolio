import "../styles/_globals.scss";
import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

library.add(faMouse);
library.add(faSearch);
//@ts-ignore
library.add(faGithub, faLinkedin, faMedium);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_TAG_ID)
      return console.log("Missing Google Tag ID");
    TagManager.initialize({
      gtmId: process.env.NEXT_PUBLIC_TAG_ID,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
