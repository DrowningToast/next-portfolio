/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import handleGhost from "../utils/handleGhost";

export default function Model({ mouseX, mouseY, scrollY, inputRange }) {
  const group = useRef();
  const lookX = useSpring(
    useTransform(mouseX, [0, 0.5, 0.825, 1], [-0.523, -0.358, 0, 0.199]),
    {
      stiffness: 600,
      damping: 30,
    }
  );
  const lookY = useSpring(useTransform(mouseY, [0, 0.5, 1], [0, 0.1, 0.2]), {
    stiffness: 600,
    damping: 30,
  });
  const [active, setActive] = useState(false);
  const opacity = useSpring(useTransform(scrollY, inputRange, [0, 1, 1, 0]), {
    stiffness: 600,
    damping: 30,
  });
  useEffect(() => {
    scrollY.onChange(() => {
      handleGhost(scrollY.get(), inputRange, setActive, active);
    });
  }, []);

  const { nodes, materials } = useGLTF("/assets/models/bust.gltf");

  return (
    <group ref={group} dispose={null}>
      {active && (
        <motion.mesh
          rotation={[lookY, lookX, 0]}
          scale={9}
          geometry={nodes.marble_bust_01.geometry}
          material={materials.marble_bust_01}
          // position={[opacity, -1.8, 0]}
          castShadow
          receiveShadow
          position={[3, -1.8, 0]}
        >
          {/* <motion.meshStandardMaterial
            {...materials.marble_bust_01}
            transparent={true}
            opacity={opacity}
            coatness={0}
          /> */}
          <motion.meshStandardMaterial
            transparent
            opacity={opacity}
            color="white"
          />
        </motion.mesh>
      )}
    </group>
  );
}
