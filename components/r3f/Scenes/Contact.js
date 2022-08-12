// import { MotionCanvas } from "framer-motion-3d";
import {
  useRef,
  useEffect,
  Suspense,
  useMemo,
  useState,
  useCallback,
} from "react";
import useWindowSize from "@components/hooks/useWindowSize";
import Television from "@components/r3f/models/Tv";
import {
  AdaptiveDpr,
  ContactShadows,
  Environment,
  Float,
  Loader,
} from "@react-three/drei";
import ContactCamera from "@components/r3f/components/ContactCamera";
import { MotionCanvas } from "framer-motion-3d";

const ContactScene = ({ selected }) => {
  const Canvas = useRef();

  const [initialLoad, setLoaded] = useState(false);
  const [canvasWidth, setWidth] = useState(0);
  const [canvasHeight, setHeight] = useState(0);

  const [width] = useWindowSize();
  const isMobile = useMemo(() => {
    return width < 1024;
  }, [width]);

  const [i, updateState] = useState(0);
  const forceUpdate = useCallback(() => {
    if (!Canvas?.current?.style) return;
    Canvas.current.style.width = "100%";
    Canvas.current.style.height = "100%";
    setWidth(Canvas.current.parentNode.clientWidth);
    setHeight(Canvas.current.parentNode.clientHeight);
    return updateState(i++);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", forceUpdate);
    window.addEventListener("orientationchange", forceUpdate);
    forceUpdate();
  }, []);

  // This thing isn't responsive to resize and orientationchange yet

  return (
    <>
      {process.browser && (
        <Suspense fallback={null}>
          <MotionCanvas
            ref={Canvas}
            dpr={[0.7, 1.2]}
            style={{
              width: "100%",
              height: "100%",
              touchAction: "none",
            }}
          >
            <Environment preset="night" />
            <ambientLight color="white" intensity={0.3} />

            <Suspense fallback={null}>
              <Float speed={0.35} rotationIntensity={0.2} floatIntensity={0.7}>
                <Television
                  scale={5}
                  position={[0, !isMobile ? -1 : -0.4, !isMobile ? 0 : 1.3]}
                  selected={selected}
                  ratio={canvasWidth / canvasHeight}
                />
              </Float>
            </Suspense>
            {!isMobile && (
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
            <ContactCamera
              canvasWidth={canvasWidth}
              canvasHeight={canvasHeight}
              isMobile={isMobile}
            />
            <AdaptiveDpr pixelated />
            <Environment preset="city" />
          </MotionCanvas>
          <Loader
            dataInterpolation={(e) => {
              if (e >= 100 && !initialLoad) {
                setLoaded(true);
                forceUpdate();
              }
            }}
          />
        </Suspense>
      )}
    </>
  );
};

export default ContactScene;
