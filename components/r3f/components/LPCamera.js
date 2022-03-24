import useWindowSize from "@components/hooks/useWindowSize";
import { useFrame } from "@react-three/fiber";
import { LayoutOrthographicCamera } from "framer-motion-3d";
import { useMemo, useRef } from "react";

const Camera = ({ selected }) => {
  const camera = useRef();
  //   useFrame(() => {
  //     camera.current.lookAt(0, camera.current.position.y, 0);
  //   });

  const [width, height] = useWindowSize();

  const isMobile = useMemo(() => {
    return width < 768;
  }, [width]);

  return (
    <LayoutOrthographicCamera
      ref={camera}
      makeDefault
      initial={false}
      animate={selected === "LP" ? "selected" : "unselected"}
      variants={{
        unselected: !isMobile
          ? {
              x: 0,
              y: 0,
              z: 20,
              zoom: 40,
            }
          : {
              x: 0,
              y: -0.75,
              z: 20,
              zoom: 40,
            },
        selected: !isMobile
          ? {
              x: 5,
              y: -5,
              z: 20,
              zoom: 50,
              rotateY: 0.6,
            }
          : {
              x: 5,
              y: 0,
              z: 9,
              zoom: 40,
              rotateY: 0.6,
            },
      }}
      zoom={40}
    />
  );
};

export default Camera;
