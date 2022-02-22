import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion-3d";

import React, { useEffect, useRef, useState } from "react";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const WaveBall = React.forwardRef(({ isContinued, Ball }, ref) => {
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

  useEffect(() => {
    if (!Ball?.current) return;
    setVertexCount(Ball.current.geometry.attributes.position.count);
    setPositionClone(
      JSON.parse(
        JSON.stringify(Ball.current.geometry.attributes.position.array)
      )
    );
    setNormalsClone(
      JSON.parse(JSON.stringify(Ball.current.geometry.attributes.normal.array))
    );
    console.log(Ball.current);
  }, [Ball?.current]);

  const damping = 0.05;

  useFrame(() => {
    if (!normals_clone) return;
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
    <MotionConfig transition={{ duration: 2.5, delay: 1 }}>
      {isContinued && (
        <motion.mesh
          rotation={[0, 0, -0.7]}
          position={[3, 0, 0]}
          ref={ref}
          castShadow
          receiveShadow
          whileHover={{
            scale: 1.2,
          }}
        >
          <sphereBufferGeometry args={[1.5, 128, 128]} />
          <motion.meshStandardMaterial
            variants={variants}
            initial={"hidden"}
            animate={!isContinued ? "hidden" : "visible"}
            map={waterBaseColor}
            normalMap={waterNormalMap}
            displacementMMap={waterHeightMap}
            roughnessMap={waterRoughness}
            aoMap={waterAmbientOcclusion}
            displacementScale={0.4}
            roughness={0}
            transparent={true}
          />
        </motion.mesh>
      )}
    </MotionConfig>
  );
});

export default WaveBall;

useTexture.preload("/assets/textures/Water_002_COLOR.jpg");
useTexture.preload("/assets/textures/Water_002_NORM.jpg");
useTexture.preload("/assets/textures/Water_002_DISP.png");
useTexture.preload("/assets/textures/Water_002_ROUGH.jpg");
useTexture.preload("/assets/textures/Water_002_OCC.jpg");
