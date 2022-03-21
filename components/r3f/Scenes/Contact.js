import { MotionCanvas } from "framer-motion-3d";
import { useRef, useEffect, Suspense } from "react";
import useWindowSize from "@components/hooks/useWindowSize";
import Television from "@components/r3f/models/Television_01_4k";
import {
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import TelevisionScreen from "@components/r3f/components/TelevisionScreen";

const ContactScene = ({ selected }) => {
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
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            shadow-mapSize={[512, 512]}
            castShadow
          />
          <Suspense fallback={null}>
            <PresentationControls
              config={{ mass: 2, tension: 900 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
              global
            >
              <Television scale={5} position={[0, -1, 0]} selected={selected} />
            </PresentationControls>
          </Suspense>
          {/* <Suspense fallback={null}>
            <TelevisionScreen />
          </Suspense> */}
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -1.8, 0]}
            opacity={0.75}
            width={10}
            height={10}
            blur={2.6}
            far={2}
          />
        </MotionCanvas>
      )}
    </>
  );
};

export default ContactScene;
