import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { type MotionValue, useSpring, useTransform } from "framer-motion";
import { type FC, useRef } from "react";
import { Group, Mesh, Object3D, type SpotLight } from "three";

interface Props {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const Light: FC<Props> = ({ mouseX, mouseY }) => {
  const SpotLight = useRef<SpotLight>(null);

  const _posX = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), {
    stiffness: 600,
    damping: 30,
  });
  const _posY = useSpring(useTransform(mouseY, [0, 1], [5, -5]), {
    stiffness: 600,
    damping: 30,
  });

  useFrame(() => {
    if (!SpotLight.current) return;
    SpotLight.current.position.set(_posX.get(), _posY.get(), 6);
  });

  return (
    <>
      <spotLight castShadow penumbra={0.2} intensity={0.75} ref={SpotLight} />
    </>
  );
};

export default Light;
