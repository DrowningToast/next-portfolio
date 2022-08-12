import { useThree } from "@react-three/fiber";
import { FC, useEffect, useRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { PerspectiveCamera as ThreePerspectiveCamera } from "three";
import { PerspectiveCamera } from "@react-three/drei";

const Camera: FC = () => {
  // Check browser size
  const [width, height] = useWindowSize();

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);

  const cameraRef = useRef<ThreePerspectiveCamera>(null);

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
      //@ts-ignore
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [cameraRef, set]);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={width < 1024 ? 65 : 50}
        ref={cameraRef}
        position={[-0.2, -0.125, 8]}
      />
    </>
  );
};

export default Camera;
