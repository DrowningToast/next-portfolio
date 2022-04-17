import { motion as Motion3D } from "framer-motion-3d";
import { useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";

import { useSpring, useTransform } from "framer-motion";

const Camera = ({ control, mouseX, mouseY }) => {
  // Check browser size
  const [width, height] = useWindowSize();

  const isMobile = useMemo(() => width < 1024, [width]);

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);

  const cameraRef = useRef();

  const posX = useSpring(useTransform(mouseX, [0, 1], [-0.2, 0.2]), {
    stiffness: 600,
    damping: 30,
  });

  const posY = useSpring(useTransform(mouseY, [0, 1], [-0.125, 0.125]), {
    stiffness: 600,
    damping: 30,
  });

  useEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = width / height;
      cam.updateProjectionMatrix();
    }
  }, [width, height]);

  useEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [cameraRef, set]);

  return (
    <>
      {!control && (
        <Motion3D.perspectiveCamera
          fov={width < 1024 ? 65 : 50}
          ref={cameraRef}
          position={!isMobile ? [posX, posY, 8] : [3, 0.45, 8]}
        />
      )}
      {/* {control && (
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
        />
      )} */}
    </>
  );
};

export default Camera;
