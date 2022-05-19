import { MotionCanvas } from "framer-motion-3d";
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
  Loader,
  PresentationControls,
  Sphere,
} from "@react-three/drei";
import CustomLayoutCamera from "@components/r3f/components/ContactCamera";

const ContactScene = ({ selected }) => {
  const Canvas = useRef();

  const [initialLoad, setLoaded] = useState(false);
  const [canvasWidth, setWidth] = useState(0);
  const [canvasHeight, setHeight] = useState(0);

  const [width, height] = useWindowSize();
  const isMobile = useMemo(() => {
    return width < 1024;
  }, [width]);

  const [i, updateState] = useState(0);
  const forceUpdate = useCallback(() => {
    if (!Canvas?.current) return;
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

  // Camera Management
  // const camera = useCustomLayoutCamera({ canvasWidth, canvasHeight });

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
              <Television
                scale={5}
                position={[0, -1, !isMobile ? 0 : 1.7]}
                selected={selected}
              />
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
            <CustomLayoutCamera
              canvasWidth={canvasWidth}
              canvasHeight={canvasHeight}
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
