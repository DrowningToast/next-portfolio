import useWindowSize from "@components/hooks/useWindowSize";
import { Environment, softShadows, Sphere, SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { LayoutOrthographicCamera, MotionCanvas } from "framer-motion-3d";
import { Suspense, useEffect, useRef } from "react";
import Patient from "../models/Patient";
import Camera from "../components/LPCamera";

const LP = ({ selected }) => {
  const Canvas = useRef();

  const [width, height] = useWindowSize();

  useEffect(() => {
    if (!Canvas.current) return;
    Canvas.current.style.width = "100%";
    Canvas.current.style.height = "100%";
  }, [Canvas.current, width, height]);

  return (
    <>
      {process.browser && (
        <MotionCanvas
          ref={Canvas}
          dpr={[1, 2]}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Environment preset="night" />
          <ambientLight color="white" intensity={0.3} />
          <color attach="background" args={["#DCF9EF"]} />
          <Patient />
          <spotLight position={[8, 4, 8]} />
          <Camera selected={selected} />
        </MotionCanvas>
      )}
    </>
  );
};

export default LP;
