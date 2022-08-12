import useWindowSize from "@components/hooks/useWindowSize";
import { deg2Rad } from "@components/utils/deg2Rad";
import { OrthographicCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { FC, useEffect, useMemo, useRef } from "react";
import { OrthographicCamera as iOrthograhpicCamera } from "three";
import getBaseRotationMatrix from "../utils/getBaseRotationMatrix";

interface Props {
  canvasWidth: number;
  canvasHeight: number;
  i: number;
}

const basePosition = {
  x: 0,
  y: -14,
  z: 16,
};

const xMobileOffset = 0;
const yMobileOffset = -14;
const zMobileOffset = 12;

function listener(e: any) {
  console.log(e);
}

const Camera: FC<Props> = ({ canvasWidth, canvasHeight, i }) => {
  const camera = useRef<iOrthograhpicCamera>(null);
  const [width] = useWindowSize();
  const renderer = useThree((state) => state.gl);

  const scroll = useScroll();

  const isMobile = useMemo(() => {
    if (width === 0) return false;
    return width < 768;
  }, [width]);

  const trackTarget = (e: DeviceOrientationEvent) => {
    if (e.beta! > 86 && e.beta! < 94) return;

    console.log(getBaseRotationMatrix(e.alpha!, e.beta!, e.gamma!));
    // Calculate the rotation matrix from the euler angles
    let rotationMatrix = getBaseRotationMatrix(
      e.alpha!,
      e.beta! - 90,
      e.gamma!
    );
    let TCameraPosition = [
      rotationMatrix[0] * basePosition.x +
        rotationMatrix[1] * basePosition.y +
        rotationMatrix[2] * basePosition.z,
      rotationMatrix[3] * basePosition.x +
        rotationMatrix[4] * basePosition.y +
        rotationMatrix[5] * basePosition.z,
      rotationMatrix[6] * basePosition.x +
        rotationMatrix[7] * basePosition.y +
        rotationMatrix[8] * basePosition.z,
    ];

    let position = {
      x: TCameraPosition[0],
      y: TCameraPosition[1],
      z: TCameraPosition[2],
    };

    console.log(
      `${position.x.toFixed(2)} ${position.y.toFixed(2)} ${position.z.toFixed(
        2
      )}`
    );
    camera.current!.position.set(position.x, position.y, position.z);
    camera.current!.lookAt(0, -14, 0);
  };

  useEffect(() => {
    if (!camera.current || !renderer) return;
    camera.current.left = canvasWidth / -2;
    camera.current.right = canvasWidth / 2;
    camera.current.top = canvasHeight / 2;
    camera.current.bottom = canvasHeight / -2;

    camera.current!.updateProjectionMatrix!();
    renderer.setSize(canvasWidth, canvasHeight);
  }, [i]);

  useEffect(() => {
    if (window.DeviceOrientationEvent && isMobile && camera.current) {
      console.log("Binding the callback to the event " + isMobile);
      window.ondeviceorientation = trackTarget;
      camera.current.updateProjectionMatrix();

      // const gyroscope = new Gyroscope();

      // gyroscope.addEventListener("reading", listener);
      // gyroscope.start();

      // window.addEventListener("deviceorientation", trackTarget);
    }
  }, [camera.current]);

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
    />
  );
};

export default Camera;
