import { motion as motion3d } from "framer-motion-3d";
import useWindowSize from "@components/hooks/useWindowSize";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const ContactCamera = ({ canvasWidth, canvasHeight, isMobile }) => {
  const cameraRef = useRef();

  const camera = useThree((state) => state.camera);
  const renderer = useThree((state) => state.gl);
  const [width, height] = useWindowSize();

  const set = useThree(({ set }) => set);

  useEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = canvasWidth / canvasHeight;
      cam.updateProjectionMatrix();
      // renderer.setSize(canvasWidth, canvasHeight);
    }
  }, [width, height]);

  useEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [cameraRef, set]);

  // useEffect(() => {
  //   if (!cameraRef.current || !renderer) return;
  //   camera.aspect = width / height;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(width, height);
  // }, [width, height]);
  return (
    <motion3d.perspectiveCamera
      makeDefault
      fov={!isMobile ? 60 : 90}
      ref={cameraRef}
      position={[0, 0, 5]}
    />
  );
};

export default ContactCamera;
