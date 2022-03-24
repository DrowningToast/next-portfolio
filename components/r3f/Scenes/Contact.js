import { MotionCanvas } from "framer-motion-3d";
import { useRef, useEffect, Suspense, useMemo } from "react";
import useWindowSize from "@components/hooks/useWindowSize";
import Television from "@components/r3f/models/Television_01_4k";
import {
  AdaptiveDpr,
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";

const ContactScene = ({ selected }) => {
  const Canvas = useRef();

  const [width, height] = useWindowSize();
  const isMobile = useMemo(() => {
    return width < 1024;
  }, [width]);

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

          <Suspense fallback={null}>
            <PresentationControls
              config={{ mass: 2, tension: 900 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
              global
            >
              <Television
                scale={5}
                position={[0, -1, !isMobile ? 0 : 1.7]}
                selected={selected}
              />
            </PresentationControls>
          </Suspense>
          {/* <Suspense fallback={null}>
            <TelevisionScreen />
          </Suspense> */}
          {isMobile && (
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -1.8, 0]}
              opacity={0.75}
              width={10}
              height={10}
              blur={2.6}
              far={2}
            />
          )}
          <AdaptiveDpr pixelated />
        </MotionCanvas>
      )}
    </>
  );
};

export default ContactScene;
