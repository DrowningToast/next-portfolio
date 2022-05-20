import {
  AdaptiveDpr,
  Loader,
  Preload,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import Light from "../components/Light";
import { Suspense, useEffect, useRef, useState } from "react";
import { MotionCanvas } from "framer-motion-3d";
import WaveBall from "../models/WaveBall";
import Hand from "../models/Hand";
import Bust from "../models/Bust";
import Camera from "../components/MainCamera";
import { useTransform } from "framer-motion";
import useWindowSize from "@components/hooks/useWindowSize";

const Hero = ({
  handleLoadComplete,
  handleFullLoaded,
  isContinued,
  finishedContinue,
  mouseX,
  mouseY,
  scrollY,
}) => {
  const [target, setTarget] = useState();

  const Canvas = useRef(null);
  const hand = useRef(null);
  const ball = useRef(null);

  const [width, height] = useWindowSize();
  const [loadStep, setLoadStep] = useState(0);

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
              toneMappingExposure: 1.1,
              antialias: false,
            }}
            dpr={[0.1, 2]}
            style={{ height: "100%", width: "100vw" }}
            ref={Canvas}
            resize={{ scroll: true }}
          >
            {/* <Stats /> */}
            <ambientLight color="white" intensity={0.1} />
            {/* <Environment preset="night" /> */}
            <Camera mouseX={mouseX} mouseY={mouseY} />
            {/* Hand */}
            <Suspense fallback={null}>
              <Hand
                handleAnimationComplete={() => setTarget(hand.current)}
                ref={hand}
                isContinued={isContinued}
                scrollY={scrollYPage}
              />
            </Suspense>
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
            <Preload all />
          </MotionCanvas>
          <Loader
            initialState={(state) => {
              if (finishedContinue && !state && loadStep === 1) {
                setLoadStep(2);
                return state;
              } else if (!state && loadStep === 0) {
                setLoadStep(1);
                handleLoadComplete(state);
                return state;
              } else if (finishedContinue && !state && loadStep === 2) {
                setLoadStep(3);
                handleFullLoaded(true);
                return state;
              }
              return state;
            }}
            containerStyles={{
              transform: "scale(2)",
            }}
          />
        </Suspense>
      )}
    </>
  );
};

export default Hero;

useGLTF.preload("/assets/models/hand.glb");
useGLTF.preload("/assets/models/Artist_2D.gltf");
useGLTF.preload("/assets/models/Briefcase_2D.gltf");
useGLTF.preload("/assets/models/bust.gltf");
useGLTF.preload("/assets/models/Controller_2D.gltf");
useGLTF.preload("/assets/models/patient.gltf");
useGLTF.preload("/assets/models/Programming_2D.gltf");
useGLTF.preload("/assets/models/Slate_2D.gltf");
useGLTF.preload("/assets/models/Television_01_4k.gltf");
useTexture.preload("/assets/textures/Water_002_COLOR.jpg");
useTexture.preload("/assets/textures/Water_002_NORM.jpg");
useTexture.preload("/assets/textures/Water_002_DISP.png");
useTexture.preload("/assets/textures/Water_002_ROUGH.jpg");
useTexture.preload("/assets/textures/Water_002_OCC.jpg");
