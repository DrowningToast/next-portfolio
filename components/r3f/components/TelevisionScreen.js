import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Image } from "@react-three/drei";
import img from "./Github.png";

const TelevisionScreen = () => {
  const texture = useLoader(THREE.TextureLoader, "/assets/png/Intern.png");
  return (
    <mesh>
      <planeBufferGeometry
        attach="geometry"
        args={[4, 4]}
        rotation={[0, Math.PI, 0]}
      />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default TelevisionScreen;
