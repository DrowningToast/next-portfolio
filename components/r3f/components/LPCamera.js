import useWindowSize from "@components/hooks/useWindowSize";
import { OrthographicCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

const Camera = ({ selected, canvasWidth, canvasHeight, i }) => {
  const camera = useRef();
  const [width] = useWindowSize();
  const renderer = useThree((state) => state.gl);

  const scroll = useScroll();

  const isMobile = useMemo(() => {
    return width < 768;
  }, [width]);

  useEffect(() => {
    if (!camera.current || !renderer) return;

    scroll.scrollY.onChange((e) => console.log(e));
    camera.current.left = canvasWidth / -2;
    camera.current.right = canvasWidth / 2;
    camera.current.top = canvasHeight / 2;
    camera.current.bottom = canvasHeight / -2;

    camera.current.updateProjectionMatrix();
    renderer.setSize(canvasWidth, canvasHeight);
  }, [i]);

  return (
    <OrthographicCamera
      key={i}
      ref={camera}
      makeDefault
      // position={[5, -5, 9]}
      position={!isMobile ? [5, -5, 20] : [5, 0, 9]}
      // position={[5, -5, !isMobile ? 20 : 9]}
      zoom={[50]}
      rotation={[0, 0.6, 0]}
      // initial={false}
      // animate={selected === "LP" ? "selected" : "unselected"}
      // variants={{
      //   unselected: !isMobile
      //     ? {
      //         x: 0,
      //         y: 0,
      //         z: 20,
      //         zoom: 40,
      //       }
      //     : {
      //         x: 0,
      //         y: -0.75,
      //         z: 20,
      //         zoom: 40,
      //       },
      //   selected: !isMobile
      //     ? {
      //         x: 5,
      //         y: -5,
      //         z: 20,
      //         zoom: 50,
      //         rotateY: 0.6,
      //       }
      //     : {
      //         x: 5,
      //         y: 0,
      //         z: 9,
      //         zoom: 40,
      //         rotateY: 0.6,
      //       },
      // }}
    />
  );
};

export default Camera;
