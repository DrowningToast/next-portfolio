import {
  useRef,
  useEffect,
  useMemo,
  useState,
  useCallback,
  Suspense,
} from "react";
import { Environment } from "@react-three/drei";
import useWindowSize from "../../hooks/useWindowSize";
import { Physics, usePlane } from "@react-three/cannon";
import InternCamera from "../components/InternCamera";
import Artist_2D from "../models/Artist_2D";
import Briefcase_2D from "../models/Briefcase_2D";
import Controller_2D from "../models/Controller_2D";
import Programming_2D from "../models/Programming_2D";
import Slate_2D from "../models/Slate_2D";
import { MotionCanvas } from "framer-motion-3d";

function Plane(props) {
  usePlane(() => props);
  return null;
}

const Intern = ({ selected }) => {
  const Canvas = useRef();

  const [canvasWidth, setWidth] = useState(0);
  const [canvasHeight, setHeight] = useState(0);
  const [width] = useWindowSize();

  const isMobile = useMemo(() => {
    return width < 1024;
  }, [width]);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => {
    if (!Canvas?.current?.style) return;
    Canvas.current.style.width = "100%";
    Canvas.current.style.height = "100%";
    setWidth(Canvas.current.scrollWidth);
    setHeight(Canvas.current.scrollHeight);
    return updateState({});
  }, []);

  useEffect(() => {
    window.addEventListener("resize", forceUpdate);
    window.addEventListener("orientationchange", forceUpdate);
    forceUpdate();
  }, []);

  return (
    <>
      {process.browser && (
        <Suspense fallback={null}>
          <MotionCanvas
            ref={Canvas}
            dpr={[0.1, 1.5]}
            style={{
              width: "100%",
              height: "100%",
            }}
            gl={{
              toneMappingExposure: 1.2,
            }}
          >
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
            <InternCamera
              canvasWidth={canvasWidth}
              canvasHeight={canvasHeight}
            />
          </MotionCanvas>
        </Suspense>
      )}
    </>
  );
};

export default Intern;
