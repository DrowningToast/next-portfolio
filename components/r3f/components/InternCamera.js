import useWindowSize from "@components/hooks/useWindowSize";
import { useThree } from "@react-three/fiber";
import { LayoutCamera } from "framer-motion-3d";
import { useRef, useEffect, useMemo } from "react";

const InternCamera = ({ canvasWidth, canvasHeight }) => {
  const camera = useRef();
  const [width] = useWindowSize();
  const renderer = useThree((state) => state.gl);

  useEffect(() => {
    if (!camera.current || !renderer) return;
    camera.current.aspect = canvasWidth / canvasHeight;
    camera.current.updateProjectionMatrix();
    renderer.setSize(canvasWidth, canvasHeight);
  }, [canvasWidth, canvasHeight, width]);

  return (
    <LayoutCamera
      ref={camera}
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
