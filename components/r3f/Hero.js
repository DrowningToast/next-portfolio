import {
  Box,
  Environment,
  Loader,
  OrbitControls,
  Scroll,
  ScrollControls,
  Sphere,
} from "@react-three/drei";
import Light from "./components/Light";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion as motion3d, MotionCanvas } from "framer-motion-3d";
import WaveBall from "./models/WaveBall";
import Hand from "./models/Hand";
import Camera from "./components/Camera";
import {
  PCFSoftShadowMap,
  ReinhardToneMapping,
  ACESFilmicToneMapping,
} from "three";

const Hero = ({ handleLoadComplete, isContinued, mouseX, mouseY, scrollY }) => {
  const [target, setTarget] = useState();

  const Canvas = useRef(null);
  const hand = useRef(null);
  const ball = useRef(null);

  // When hand reference is done, link it to target
  useEffect(() => {
    console.log(hand.current);
    setTarget(hand.current);
  }, [hand.current]);

  // When first click, change lighting target to the ball
  useEffect(() => {
    if (isContinued) setTarget(ball.current);
  }, [isContinued]);

  useEffect(() => {
    Canvas.current.style.width = "100vw";
  }, [Canvas.current]);

  return (
    <>
      {process.browser && (
        <Suspense fallback={null}>
          <MotionCanvas
            gl={{
              toneMapping: ACESFilmicToneMapping,
              toneMappingExposure: 1.1,
            }}
            onCreated={(state) => {
              handleLoadComplete(state);
            }}
            dpr={[1, 1.5]}
            style={{ height: "100%", width: "100vw" }}
            shadows={{
              enabled: true,
              needsUpdate: true,
              type: PCFSoftShadowMap,
            }}
            ref={Canvas}
            resize={{ scroll: true }}
          >
            <ambientLight color="white" intensity={0.1} />
            <Environment preset="night" />
            <Camera />
            {/* <color attach="background" args={["#1b1b1b"]}></color> */}

            {/* Hand */}
            <Hand
              handleAnimationComplete={() => setTarget(hand.current)}
              ref={hand}
              state={`${!isContinued ? "holdingWord" : "holding"}`}
            />
            {/* Blue Wave Ball */}
            <WaveBall ref={ball} isContinued={isContinued} Ball={ball} />
            {target && (
              <Light mouseX={mouseX} mouseY={mouseY} target={target} />
            )}
          </MotionCanvas>
          <Loader />
        </Suspense>
      )}
    </>
  );
};

export default Hero;
