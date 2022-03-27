import useWindowSize from "@components/hooks/useWindowSize";
import { useThree } from "@react-three/fiber";
import { LayoutCamera } from "framer-motion-3d";
import { useRef, useEffect } from "react";

const CustomLayoutCamera = ({ canvasWidth, canvasHeight }) => {
  const camera = useThree((state) => state.camera);
  const renderer = useThree((state) => state.gl);
  const [width] = useWindowSize();
  useEffect(() => {
    if (!camera.current || !renderer) return;
    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasWidth, canvasHeight);
  }, [canvasWidth, canvasWidth, width]);
  return null;
};

export default CustomLayoutCamera;
