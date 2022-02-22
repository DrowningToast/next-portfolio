import { motion as motion3d } from "framer-motion-3d";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { OrbitControls } from "@react-three/drei";

const Camera = ({ control }) => {
  // Check browser size
  const [width, height] = useWindowSize();

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef();

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      size.width = width;
      size.height = height;
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
    }
  }, [width, height]);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  return (
    <>
      {!control && (
        <motion3d.perspectiveCamera ref={cameraRef} position={[0, 0, 8]} />
      )}
      {control && (
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
        />
      )}
    </>
  );
};

export default Camera;
