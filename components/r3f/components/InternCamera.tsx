import useWindowSize from "@components/hooks/useWindowSize";
import { useThree } from "@react-three/fiber";
import { useRef, useEffect, FC } from "react";
import { LayoutCamera } from "framer-motion-3d";
import { PerspectiveCamera } from "three";

interface Props {
  canvasWidth: number;
  canvasHeight: number;
}

const InternCamera: FC<Props> = ({ canvasWidth, canvasHeight }) => {
  const camera = useRef<PerspectiveCamera>();
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
      }}
      fov={50}
    />
  );
};

export default InternCamera;
