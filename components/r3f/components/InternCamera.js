import { LayoutGroupContext } from "framer-motion";
import {
  motion,
  LayoutCamera,
  MotionCanvas,
  LayoutOrthographicCamera,
} from "framer-motion-3d";
import { useRef } from "react";

const InternCamera = () => {
  return (
    <LayoutCamera
      makeDefault
      initial={false}
      animate={{
        x: 0,
        y: 0,
        z: 17,
        fov: 50,
      }}
    />
  );
};

export default InternCamera;
