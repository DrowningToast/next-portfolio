import { useRef, useEffect } from "react";
import { MotionCanvas } from "framer-motion-3d";
import { Environment } from "@react-three/drei";
import useWindowSize from "../../hooks/useWindowSize";

const Intern = () => {
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
          {/* <color attach="background" args={["#DCF9EF"]} /> */}
        </MotionCanvas>
      )}
    </>
  );
};

export default Intern;
