import { useFrame } from "@react-three/fiber";
import { LayoutOrthographicCamera } from "framer-motion-3d";
import { useRef } from "react";

const Camera = ({ selected }) => {
  const camera = useRef();
  //   useFrame(() => {
  //     camera.current.lookAt(0, camera.current.position.y, 0);
  //   });

  return (
    <LayoutOrthographicCamera
      ref={camera}
      makeDefault
      initial={false}
      animate={selected === "LP" ? "selected" : "unselected"}
      variants={{
        unselected: {
          x: 0,
          y: 0,
          z: 20,
          zoom: 40,
        },
        selected: {
          x: 5,
          y: -5,
          z: 20,
          zoom: 50,
          rotateY: 0.6,
        },
      }}
      zoom={40}
    />
  );
};

export default Camera;
