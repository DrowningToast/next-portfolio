import useWindowSize from "@components/hooks/useWindowSize";
import { Environment } from "@react-three/drei";
import { MotionCanvas } from "framer-motion-3d";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Patient from "../models/Patient";
import Camera from "../components/LPCamera";

const LP = ({ selected }) => {
  const Canvas = useRef();

  const [canvasWidth, setWidth] = useState(0);
  const [canvasHeight, setHeight] = useState(0);

  const [i, updateState] = useState(0);
  const forceUpdate = useCallback(() => {
    if (!Canvas.current) return;
    setTimeout(() => {
      Canvas.current.style.width = "100%";
      Canvas.current.style.height = "100%";
      setWidth(Canvas.current.parentNode.clientWidth);
      setHeight(Canvas.current.parentNode.clientHeight);

      return updateState(i++);
    }, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", forceUpdate);
    forceUpdate();
  }, []);

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

          <Camera
            selected={selected}
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            i={i}
          />
        </MotionCanvas>
      )}
    </>
  );
};

export default LP;
