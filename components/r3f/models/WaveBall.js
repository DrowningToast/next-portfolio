import { useDetectGPU, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MotionConfig, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";

import React, { useEffect, useRef, useState } from "react";
import handleGhost from "../utils/handleGhost";

const WaveBall = React.forwardRef(
  ({ isContinued, Ball, scrollYPage, inputRange }, ref) => {
    const [
      waterBaseColor,
      waterNormalMap,
      waterHeightMap,
      waterRoughness,
      waterAmbientOcclusion,
    ] = useTexture([
      "/assets/textures/Water_002_COLOR.jpg",
      "/assets/textures/Water_002_NORM.jpg",
      "/assets/textures/Water_002_DISP.png",
      "/assets/textures/Water_002_ROUGH.jpg",
      "/assets/textures/Water_002_OCC.jpg",
    ]);

    const [count, setVertexCount] = useState(0);
    const [position_clone, setPositionClone] = useState();
    const [normals_clone, setNormalsClone] = useState();
    const [active, setActive] = useState(true);
    const gpuTier = useDetectGPU();

    const [transitionAnimationComplete, seTransitionAnimation] =
      useState(false);
    const scrollOpacity = useTransform(scrollYPage, inputRange, [1, 1, 0]);

    useEffect(() => {
      if (!Ball?.current?.geometry) return;
      setVertexCount(Ball.current.geometry.attributes.position.count);
      setPositionClone(
        JSON.parse(
          JSON.stringify(Ball.current.geometry.attributes.position.array)
        )
      );
      setNormalsClone(
        JSON.parse(
          JSON.stringify(Ball.current.geometry.attributes.normal.array)
        )
      );
    }, [Ball?.current]);

    const damping = 0.05;

    useEffect(() => {
      scrollYPage.onChange(() => {
        handleGhost(scrollYPage.get(), inputRange, setActive, active);
      });
    }, []);

    useFrame(() => {
      if (!normals_clone || !Ball.current?.geometry || gpuTier.isMobile) return;
      const now = Date.now() / 200;
      // Iterate through all vertices
      for (let i = 0; i < count; i++) {
        // indices
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        // use uvs to calculate wave
        const uX = Ball.current.geometry.attributes.uv.getX(i) * Math.PI * 8;
        const uY = Ball.current.geometry.attributes.uv.getY(i) * Math.PI * 8;

        // Calculate current vertex wave height
        const xangle = uX + now;
        const xsin = Math.sin(xangle) * damping;
        const yangle = uY + now;
        const ycos = Math.cos(yangle) * damping;

        //set new position
        Ball.current.geometry.attributes.position.setX(
          i,
          position_clone[ix] + normals_clone[ix] * (xsin + ycos)
        );
        Ball.current.geometry.attributes.position.setY(
          i,
          position_clone[iy] + normals_clone[iy] * (xsin + ycos)
        );
        Ball.current.geometry.attributes.position.setZ(
          i,
          position_clone[iz] + normals_clone[iz] * (xsin + ycos)
        );
      }
      Ball.current.geometry.computeVertexNormals();
      Ball.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
      <MotionConfig transition={{ duration: 0.5, delay: 0.35 }}>
        {isContinued && active && (
          <motion.mesh
            rotation={[0, 0, -0.7]}
            position={[3, 0, 0]}
            ref={ref}
            castShadow
            receiveShadow
          >
            <sphereBufferGeometry args={[1.5, 128, 128]} />
            {transitionAnimationComplete && (
              <motion.meshStandardMaterial
                opacity={!isContinued ? 1 : scrollOpacity}
                map={waterBaseColor}
                normalMap={waterNormalMap}
                displacementMMap={gpuTier?.tier >= 3 ? waterHeightMap : null}
                roughnessMap={gpuTier?.tier >= 3 ? waterRoughness : null}
                aoMap={gpuTier?.tier >= 3 ? waterAmbientOcclusion : null}
                displacementScale={0.4}
                roughness={0}
                transparent={true}
              />
            )}
            {!transitionAnimationComplete && (
              <motion.meshStandardMaterial
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                onAnimationComplete={() => seTransitionAnimation(true)}
                map={waterBaseColor}
                normalMap={waterNormalMap}
                displacementMMap={gpuTier?.tier >= 3 ? waterHeightMap : null}
                roughnessMap={gpuTier?.tier >= 3 ? waterRoughness : null}
                aoMap={gpuTier?.tier >= 3 ? waterAmbientOcclusion : null}
                displacementScale={0.4}
                roughness={0}
                transparent={true}
              />
            )}
          </motion.mesh>
        )}
      </MotionConfig>
    );
  }
);

export default WaveBall;
