/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { MotionValue, useSpring, useTransform } from "framer-motion";
// import { motion } from "framer-motion-3d";
import handleGhost from "../utils/handleGhost";
import useWindowSize from "@components/hooks/useWindowSize";
import { Group, Material, Mesh, MeshStandardMaterial } from "three";
import { useFrame } from "@react-three/fiber";

interface Props {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  scrollY: MotionValue<number>;
  inputRange: number[];
}

const Bust: FC<Props> = ({ mouseX, mouseY, scrollY, inputRange }) => {
  const group = useRef<Group>(null);
  const bustRef = useRef<Mesh>(null);
  const bustMat = useRef<MeshStandardMaterial>(null);
  const [width] = useWindowSize();

  const isMobile = useMemo(() => {
    return width < 1024;
  }, [width]);

  const lookX = useSpring(
    useTransform<number, number>(
      mouseX,
      [0, 0.5, 0.825, 1],
      [-0.523, -0.358, 0, 0.199]
    ),
    {
      stiffness: 600,
      damping: 30,
    }
  );
  const lookY = useSpring(
    useTransform<number, number>(mouseY, [0, 0.5, 1], [0, 0.1, 0.2]),
    {
      stiffness: 600,
      damping: 30,
    }
  );
  const [active, setActive] = useState<boolean>(false);
  const opacity = useSpring(
    useTransform<number, number>(scrollY, inputRange, [0, 1, 1, 0]),
    {
      stiffness: 600,
      damping: 30,
    }
  );
  useEffect(() => {
    scrollY.onChange(() => {
      handleGhost(scrollY.get(), inputRange, setActive, active);
    });
  }, []);

  const { nodes, materials } = useGLTF("/assets/models/bust.gltf");

  useFrame(() => {
    if (!group.current || !bustRef.current || !bustMat.current) return;
    bustRef.current.rotation.set(lookY.get(), lookX.get(), 0, "XYZ");
    bustMat.current.opacity = opacity.get();
  });

  return (
    <group ref={group} dispose={null}>
      {active && (
        <mesh
          ref={bustRef}
          scale={9}
          geometry={nodes.marble_bust_01.geometry}
          material={materials.marble_bust_01}
          // position={[opacity, -1.8, 0]}
          castShadow
          receiveShadow
          position={[3, -1.8, 0]}
        >
          <meshStandardMaterial
            ref={bustMat}
            transparent={true}
            // coatness={0}
            color={!isMobile ? "white" : "#90e1c8"}
          />
        </mesh>
      )}
    </group>
  );
};

export default Bust;
