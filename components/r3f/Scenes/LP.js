import { Environment, useDetectGPU } from "@react-three/drei";
import { MotionCanvas } from "framer-motion-3d";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import Patient from "../models/Patient";
import Camera from "../components/LPCamera";

const LP = ({ selected }) => {
  const Canvas = useRef();

  const [canvasWidth, setWidth] = useState(0);
  const [canvasHeight, setHeight] = useState(0);

  const gpuTier = useDetectGPU();

  const [i, updateState] = useState(0);
  const forceUpdate = useCallback(() => {
    if (!Canvas?.current) return;
    Canvas.current.style.width = "100%";
    Canvas.current.style.height = "100%";
    setWidth(Canvas.current.parentNode.clientWidth);
    setHeight(Canvas.current.parentNode.clientHeight);
    return updateState(i++);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", forceUpdate);
    forceUpdate();
  }, []);

  return (
    <>
      {process.browser && (
        <Suspense fallback={null}>
          <MotionCanvas
            ref={Canvas}
            dpr={[0.25, 1.5]}
            style={{
              width: "100%",
              height: "100%",
            }}
            gl={{
              antialias: gpuTier.isMobile ?? false,
            }}
          >
            {!gpuTier.isMobile && <Environment preset="night" />}
            <ambientLight color="white" intensity={0.3} />
            <color attach="background" args={["#DCF9EF"]} />
            <Patient />
            {!gpuTier.isMobile && <spotLight position={[8, 4, 8]} />}
            <Camera
              selected={selected}
              canvasHeight={canvasHeight}
              canvasWidth={canvasWidth}
              i={i}
            />
          </MotionCanvas>
          {/* <Loader
            dataInterpolation={(e) => {
              if (e >= 100 && !initialLoad) {
                setLoaded(true);
                forceUpdate();
              }
            }}
          /> */}
        </Suspense>
      )}
    </>
  );
};

export default LP;
