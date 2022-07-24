import { Sphere } from "@react-three/drei";
import { useSpring, useTransform } from "framer-motion";

const Light = ({ target, mouseX, mouseY }) => {
  const posX = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), {
    stiffness: 600,
    damping: 30,
  });
  const posY = useSpring(useTransform(mouseY, [0, 1], [5, -5]), {
    stiffness: 600,
    damping: 30,
  });

  return (
    <>
      <spotLight
        intensity={0.5}
        target={target}
        position={[posX, posY, 6]}
        castShadow
        fov={80}
      />
      {/* <motion.mesh castShadow position={[posX, posY, 6]}>
        <sphereBufferGeometry args={[0.1, 64, 64]} />
        <meshPhysicalMaterial clearcoat={1} attach="material" />
      </motion.mesh> */}
    </>
  );
};

export default Light;
