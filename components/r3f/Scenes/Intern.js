import { useRef, useEffect, useMemo } from "react";
import { LayoutCamera, MotionCanvas } from "framer-motion-3d";
import { Environment, Sphere } from "@react-three/drei";
import useWindowSize from "../../hooks/useWindowSize";
import { Debug, Physics, usePlane } from "@react-three/cannon";
import InternCamera from "../components/InternCamera";
import Camera from "../components/LPCamera";
import Artist_2D from "../models/Artist_2D";
import Briefcase_2D from "../models/Briefcase_2D";
import Controller_2D from "../models/Controller_2D";
import Programming_2D from "../models/Programming_2D";
import Slate_2D from "../models/Slate_2D";
import { ReinhardToneMapping } from "three";

function Plane(props) {
  usePlane(() => props);
  return null;
}

const Intern = ({ selected }) => {
  const Canvas = useRef();

  const [width, height] = useWindowSize();

  const isMobile = useMemo(() => {
    return width < 1024;
  }, [width]);

  useEffect(() => {
    if (!Canvas.current) return;
    console.log("set the width");
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
          gl={{
            toneMapping: ReinhardToneMapping,
            toneMappingExposure: 1.2,
          }}
        >
          <Environment preset="warehouse" />
          <ambientLight color="white" intensity={0.8} />
          <color attach="background" args={["white"]} />
          <Physics gravity={[0, 0, 0]} iterations={1} broadphase="SAP">
            <Plane position={[0, -8, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            <Plane position={[0, 8, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <Plane position={[0, 0, 0]} rotation={[0, 0, 0]} />
            <Plane position={[0, 0, 1.5]} rotation={[0, -Math.PI, 0]} />
            <Artist_2D
              isMobile={isMobile}
              scale={0.9}
              position={[0, 0, -4]}
              selected={selected}
            />
            <Briefcase_2D
              scale={0.9}
              isMobile={isMobile}
              position={[0, 0, -4]}
              selected={selected}
            />
            <Controller_2D
              scale={0.9}
              isMobile={isMobile}
              position={[0, 0, -4]}
              selected={selected}
            />
            <Programming_2D
              scale={0.9}
              position={[0, 0, -4]}
              selected={selected}
              isMobile={isMobile}
            />
            <Slate_2D
              scale={0.9}
              isMobile={isMobile}
              position={[0, 0, -4]}
              selected={selected}
            />
          </Physics>
          <InternCamera />
        </MotionCanvas>
      )}
    </>
  );
};

export default Intern;
