import useWindowSize from "@components/hooks/useWindowSize";
import { deg2Rad } from "@components/utils/deg2Rad";
import { OrthographicCamera } from "@react-three/drei";
import { OrthographicCameraProps, useThree } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { FC, useEffect, useMemo, useRef } from "react";
import { OrthographicCamera as iOrthograhpicCamera, Vector3 } from "three";

interface Props {
  canvasWidth: number;
  canvasHeight: number;
  i: number;
}

const xMobileOffset = 0;
const yMobileOffset = -14;
const zMobileOffset = 12;

const Camera: FC<Props> = ({ canvasWidth, canvasHeight, i }) => {
  const camera = useRef<iOrthograhpicCamera>(null);
  const [width] = useWindowSize();
  const renderer = useThree((state) => state.gl);

  const scroll = useScroll();

  const isMobile = useMemo(() => {
    return width < 768;
  }, [width]);

  const trackTarget = (e: DeviceOrientationEvent) => {
    console.log(`${e.alpha} ${e.beta} ${e.gamma}`);
    // Z
    //
    let zPos =
      zMobileOffset * Math.sin(deg2Rad(Math.max(e.gamma! + 90, e.beta!)));
    // X
    let xPos = zMobileOffset * Math.sin(deg2Rad(e.gamma!));
    // Y
    let yPos = yMobileOffset * Math.sin(deg2Rad(e.beta!));
    console.log(`${xPos} ${yPos} ${zPos}`);
    camera.current!.position.set(xPos, yPos, zPos);
    camera.current!.lookAt(0, -14, 0);
  };

  useEffect(() => {
    if (!camera.current || !renderer) return;

    console.log(camera.current.position);

    camera.current.left = canvasWidth / -2;
    camera.current.right = canvasWidth / 2;
    camera.current.top = canvasHeight / 2;
    camera.current.bottom = canvasHeight / -2;

    camera.current!.updateProjectionMatrix!();
    renderer.setSize(canvasWidth, canvasHeight);
  }, [i]);

  useEffect(() => {
    if (window.DeviceOrientationEvent && isMobile) {
      // window.removeEventListener("'deviceorientation", trackTarget);
      window.ondeviceorientation = trackTarget;
      // window.addEventListener("deviceorientation", trackTarget);
    }
  }, []);

  return (
    <OrthographicCamera
      key={i}
      ref={camera}
      makeDefault
      // position={[5, -5, 9]}
      position={!isMobile ? [5, -5, 20] : [0, -14, 12]}
      // position={[5, -5, !isMobile ? 20 : 9]}
      zoom={!isMobile ? 50 : 7.5}
      rotation={!isMobile ? [0, 0.6, 0] : [0, 0, 0]}
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
