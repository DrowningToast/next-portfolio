import {
  AdaptiveDpr,
  Environment,
  Loader,
  OrbitControls,
  Sphere,
  Stats,
} from "@react-three/drei";
import Light from "../components/Light";
import {
  Dispatch,
  ExoticComponent,
  FC,
  SetStateAction,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import WaveBall from "../models/WaveBall";
import Hand from "../models/Hand";
import Bust from "../models/Bust";
import Camera from "../components/MainCamera";
import { MotionValue, useTransform } from "framer-motion";
import useWindowSize from "@components/hooks/useWindowSize";
import { Canvas } from "@react-three/fiber";
import { Group, Mesh } from "three";

interface Props {
  handleLoadComplete: () => void;
  handleFullLoaded: Dispatch<SetStateAction<boolean>>;
  isContinued: boolean;
  finishedContinue: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  scrollY: MotionValue<number>;
}

const Hero: FC<Props> = ({
  handleLoadComplete,
  handleFullLoaded,
  isContinued,
  finishedContinue,
  mouseX,
  mouseY,
  scrollY,
}) => {
  const CanvasRef = useRef<any>(null);
  const ball = useRef<Mesh>(null);

  const [width, height] = useWindowSize();
  const [loadStep, setLoadStep] = useState(0);

  const totalPages = 4;

  useEffect(() => {
    if (!CanvasRef?.current?.style) return;
    CanvasRef.current.style.width = "100vw";
    CanvasRef.current.style.height = "100vh";
  }, [CanvasRef.current]);

  const scrollYPage = useTransform(
    scrollY,
    [0, totalPages * height],
    [0, totalPages]
  );

  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          gl={{
            toneMappingExposure: 1.1,
            antialias: false,
          }}
          dpr={[1, 2]}
          style={{ height: "100%", width: "100vw" }}
          ref={CanvasRef}
          resize={{ scroll: true }}
        >
          <ambientLight color="white" intensity={0.1} />
          <Environment preset="night" />
          <Camera mouseX={mouseX} mouseY={mouseY} />
          {/* Hand */}
          <Suspense fallback={null}>
            <Hand isContinued={isContinued} scrollY={scrollYPage} />
          </Suspense>
          {/* Blue Wave Ball */}
          {/* Page : 1 */}
          {/*  0 , 0.5 , 0.75 */}
          <WaveBall
            ref={ball}
            isContinued={isContinued}
            Ball={ball}
            scrollYPage={scrollYPage}
            inputRange={[0, 0.5, 0.65]}
          />
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

          <Light mouseX={mouseX} mouseY={mouseY} />

          {/* <AdaptiveDpr pixelated /> */}
        </Canvas>
        <Loader
          initialState={(state) => {
            if (finishedContinue && !state && loadStep === 1) {
              setLoadStep(2);
              return state;
            } else if (!state && loadStep === 0) {
              setLoadStep(1);
              handleLoadComplete();
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
    </>
  );
};

export default Hero;

// useGLTF.preload("/assets/models/hand.glb");
// useGLTF.preload("/assets/models/Artist_2D.gltf");
// useGLTF.preload("/assets/models/Briefcase_2D.gltf");
// useGLTF.preload("/assets/models/bust.gltf");
// useGLTF.preload("/assets/models/Controller_2D.gltf");
// useGLTF.preload("/assets/models/patient.gltf");
// useGLTF.preload("/assets/models/Programming_2D.gltf");
// useGLTF.preload("/assets/models/Slate_2D.gltf");
// useGLTF.preload("/assets/models/Television_01_4k.gltf");
// useTexture.preload("/assets/textures/Water_002_COLOR.jpg");
// useTexture.preload("/assets/textures/Water_002_NORM.jpg");
// useTexture.preload("/assets/textures/Water_002_DISP.png");
// useTexture.preload("/assets/textures/Water_002_ROUGH.jpg");
// useTexture.preload("/assets/textures/Water_002_OCC.jpg");
