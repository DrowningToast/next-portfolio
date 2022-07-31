import { Environment, useDetectGPU } from "@react-three/drei";
import { FC, Suspense, useCallback, useEffect, useRef, useState } from "react";
import Patient from "../models/Patient";
import Camera from "../components/LPCamera";
import { Canvas } from "@react-three/fiber";

type LPCanvas = HTMLCanvasElement & {
  parentNode: {
    clientWidth: number;
    clientHeight: number;
  };
};

const LP: FC = () => {
  const CanvasRef = useRef<LPCanvas>(null);

  const [canvasWidth, setWidth] = useState(0);
  const [canvasHeight, setHeight] = useState(0);

  const gpuTier = useDetectGPU();

  let [i, updateState] = useState(0);
  const forceUpdate = useCallback(() => {
    if (
      !CanvasRef.current ||
      !CanvasRef.current.parentNode?.clientWidth ||
      !Canvas
    ) {
      return;
    } else {
      CanvasRef.current.style.width = "100%";
      CanvasRef.current.style.height = "100%";
      setWidth(CanvasRef.current.parentNode.clientWidth);
      setHeight(CanvasRef.current.parentNode.clientHeight);
      return updateState(i++);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", forceUpdate);
    forceUpdate();
  }, []);

  return (
    <>
      {process.browser && (
        <Suspense fallback={null}>
          <Canvas
            ref={CanvasRef}
            dpr={[0.25, 1.5]}
            style={{
              width: "100%",
              height: "100%",
            }}
            gl={
              {
                // antialias: gpuTier.isMobile ?? false,
              }
            }
          >
            <Environment preset="night" />
            <ambientLight color="white" intensity={0.3} />
            <color attach="background" args={["#DCF9EF"]} />
            <Patient />
            <spotLight position={[8, 4, 8]} />
            <Camera
              selected={"LP"}
              canvasHeight={canvasHeight}
              canvasWidth={canvasWidth}
              i={i}
            />
          </Canvas>
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
