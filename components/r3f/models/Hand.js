/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useMemo, useState } from "react";
import { MeshWobbleMaterial, useGLTF } from "@react-three/drei";
import { motion as motion3d } from "framer-motion-3d";
import { useSpring, useTransform } from "framer-motion";
import useWindowSize from "@components/hooks/useWindowSize";

const transitionDuration = 2.75;

export default React.forwardRef(
  ({ scrollY, handleAnimationComplete, isContinued }, ref) => {
    const { nodes, materials } = useGLTF("/assets/models/hand.glb");
    const [transitionComplete, setTransitionComplete] = useState(false);
    const [width] = useWindowSize();
    const isMobile = useMemo(() => {
      return width < 1024;
    }, [width]);

    const posX = useSpring(
      useTransform(
        scrollY,
        [1.6, 1.8, 3.25, 3.75],
        [3, !isMobile ? 0.9 : 4, !isMobile ? 0.9 : 4, 16]
      ),
      {
        stiffness: 600,
        damping: 30,
      }
    );
    const posY = useSpring(
      useTransform(scrollY, [1.6, 1.8, 3.25, 3.75], [-3.1, -4, -4, -3.1]),
      {
        stiffness: 600,
        damping: 30,
      }
    );
    const rotX = useSpring(
      useTransform(
        scrollY,
        [1.6, 1.8, 3.25, 3.75],
        [0, -3.14 / 4 + 0.7, -3.14 / 4 + 0.7, 0]
      ),
      {
        stiffness: 600,
        damping: 30,
      }
    );
    const rotY = useSpring(
      useTransform(
        scrollY,
        [1.6, 1.8, 3.25, 3.75],
        [3.14, 3.14 * 1.5, 3.14 * 1.5, 3.14]
      ),
      {
        stiffness: 600,
        damping: 30,
      }
    );
    const rotZ = useSpring(
      useTransform(scrollY, [1.75, 1.9, 3.25, 3.75], [0, 0, 0, 0]),
      {
        stiffness: 600,
        damping: 30,
      }
    );

    return (
      <>
        {transitionComplete && (
          <motion3d.group
            scale={8}
            ref={ref}
            dispose={null}
            position={isContinued ? [posX, posY, 0] : [4, -3, 0]}
            rotation={isContinued ? [rotX, rotY, rotZ] : [0, -3, 0]}
            onAnimationComplete={handleAnimationComplete}
          >
            <mesh
              geometry={nodes.Plane005.geometry}
              material={materials["Material #46"]}
              position={[-3.73, -1.01, 0.78]}
              rotation={[-1.59, 0.88, -2.75]}
              scale={0.01}
              castShadow
              receiveShadow
            >
              <MeshWobbleMaterial
                attach="material"
                factor={0.00075}
                speed={3}
                color="#b2a99b"
              />
            </mesh>
          </motion3d.group>
        )}
        {!transitionComplete && (
          <motion3d.group
            scale={8}
            ref={ref}
            dispose={null}
            initial="holdingWord"
            animate={isContinued ? "holding" : "holdingWord"}
            variants={{
              holdingWord: {
                rotateY: 3.14,
                rotateZ: -0.6,
                x: 4,
                y: -3,
                z: 0,
              },
              holding: {
                rotateX: 0,
                rotateY: 3.14,
                rotateZ: 0,
                x: 3.2,
                y: -3.25,
                z: 0,
                transition: {
                  duration: transitionDuration + 2,
                },
              },
            }}
            onAnimationComplete={(e) => {
              if (isContinued) setTransitionComplete(true);
              handleAnimationComplete(e);
            }}
          >
            <mesh
              geometry={nodes.Plane005.geometry}
              material={materials["Material #46"]}
              position={[-3.73, -1.01, 0.78]}
              rotation={[-1.59, 0.88, -2.75]}
              scale={0.01}
              castShadow
              receiveShadow
            >
              <MeshWobbleMaterial
                attach="material"
                factor={!isMobile ? 0.00075 : 0}
                speed={!isMobile ? 3 : 0}
                color="#b2a99b"
              />
            </mesh>
          </motion3d.group>
        )}
      </>
    );
  }
);
