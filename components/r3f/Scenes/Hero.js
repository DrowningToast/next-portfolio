import { AdaptiveDpr, Environment, Loader } from "@react-three/drei";
import Light from "../components/Light";
import { Suspense, useEffect, useRef, useState } from "react";
import { motion as motion3d, MotionCanvas } from "framer-motion-3d";
import WaveBall from "../models/WaveBall";

import Hand from "../models/Hand";
import Bust from "../models/Bust";
import Camera from "../components/MainCamera";
import { ReinhardToneMapping } from "three";
import { useTransform } from "framer-motion";
import useWindowSize from "@components/hooks/useWindowSize";

const Hero = ({ handleLoadComplete, isContinued, mouseX, mouseY, scrollY }) => {
  const [target, setTarget] = useState();

  const Canvas = useRef(null);
  const hand = useRef(null);
  const ball = useRef(null);

  const [width, height] = useWindowSize();

  const totalPages = 4;

  // When first click, change lighting target to the ball
  useEffect(() => {
    if (isContinued) setTarget(ball.current);
  }, [isContinued]);

  useEffect(() => {
    Canvas.current.style.width = "100vw";
    Canvas.current.style.height = "100vh";
  }, [Canvas.current]);

  const scrollYPage = useTransform(
    scrollY,
    [0, totalPages * height],
    [0, totalPages]
  );

  return (
    <>
      {process.browser && (
        <Suspense fallback={null}>
          <MotionCanvas
            gl={{
              toneMapping: ReinhardToneMapping,
              toneMappingExposure: 1.2,
            }}
            onCreated={(state) => {
              handleLoadComplete(state);
            }}
            dpr={[1, 1.5]}
            style={{ height: "100%", width: "100vw" }}
            shadows
            // shadows={{
            //   enabled: true,
            //   needsUpdate: true,
            //   // type: PCFSoftShadowMap,
            // }}
            ref={Canvas}
            resize={{ scroll: true }}
          >
            <ambientLight color="white" intensity={0.1} />
            <Environment preset="night" />
            <Camera mouseX={mouseX} mouseY={mouseY} />
            {/* Hand */}
            <Hand
              handleAnimationComplete={() => setTarget(hand.current)}
              ref={hand}
              isContinued={isContinued}
              scrollY={scrollYPage}
            />
            {/* Blue Wave Ball */}
            {/* Page : 1 */}
            {/*  0 , 0.5 , 0.75 */}
            <Suspense fallback={null}>
              <WaveBall
                ref={ball}
                isContinued={isContinued}
                Ball={ball}
                scrollYPage={scrollYPage}
                inputRange={[0, 0.5, 0.65]}
              />
            </Suspense>
            {/* Marble Bust */}
            {/* Page : 2 */}
            {/* 0.75, 1, 1.5,  1.8 */}
            <Suspense fallback={null}>
              <Bust
                mouseX={mouseX}
                mouseY={mouseY}
                scrollY={scrollYPage}
                inputRange={[0.65, 0.9, 1.4, 1.6]}
              />
            </Suspense>
            {target && (
              <Light mouseX={mouseX} mouseY={mouseY} target={target} />
            )}
            <AdaptiveDpr pixelated />
          </MotionCanvas>
          <Loader />
        </Suspense>
      )}
    </>
  );
};

export default Hero;
