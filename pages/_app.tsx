import "../styles/_globals.scss";
import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

library.add(fas);

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

useGLTF.preload("/assets/models/hand.glb");
useGLTF.preload("/assets/models/bust_very_low.gltf");
useGLTF.preload("/assets/models/Controller_2D.gltf");
useGLTF.preload("/assets/models/patient.gltf");
useGLTF.preload("/assets/models/Programming_2D.gltf");
useGLTF.preload("/assets/models/Slate_2D.gltf");
useGLTF.preload("/assets/models/Artist_2D.gltf");
useGLTF.preload("/assets/models/Briefcase_2D.gltf");
useGLTF.preload("/assets/models/tv.gltf");
useTexture.preload("/assets/textures/Water_002_COLOR.jpg");
useTexture.preload("/assets/textures/Water_002_NORM.jpg");
useTexture.preload("/assets/textures/Water_002_DISP.png");
useTexture.preload("/assets/textures/Water_002_ROUGH.jpg");
useTexture.preload("/assets/textures/Water_002_OCC.jpg");

export default MyApp;
