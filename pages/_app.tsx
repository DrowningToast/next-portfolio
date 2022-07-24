import "../styles/_globals.scss";
import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import TagManager from "react-gtm-module";
// import { useEffect } from "react";

import { GLTF as GLTFThree } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, Material } from "three";

library.add(fas);

declare module "three-stdlib" {
  export interface GLTF extends GLTFThree {
    nodes: Record<string, Mesh>;
    materials: Record<string, Material>;
  }
}

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
