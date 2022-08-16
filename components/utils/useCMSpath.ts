import { useState } from "react";
import useNodeEnv from "./useNodeEnv";

const useCMSpath = () => {
  const env = useNodeEnv();

  if (env === "development") {
    if (!process.env.NEXT_PUBLIC_DEV_CMS_PATH) {
      return console.error("Missing DEV CMS URL in the .env");
    } else {
      return process.env.NEXT_PUBLIC_DEV_CMS_PATH;
    }
  } else if (env === "production") {
    if (!process.env.NEXT_PUBLIC_PROD_CMS_PATH) {
      return console.error("Missing PROD CMS URL in the .env");
    } else {
      return process.env.NEXT_PUBLIC_PROD_CMS_PATH;
    }
  } else {
    throw `An error has occured`;
  }
};

export default useCMSpath;
