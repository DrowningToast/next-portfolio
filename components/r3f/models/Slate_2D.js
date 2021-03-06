/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Vector3 } from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

const vec = new Vector3();

export default function Model({ ...props }) {
  const { nodes } = useGLTF("/assets/models/Slate_2D.gltf");

  const position = useRef([0, 0, 0]);

  useEffect(() => api.position.subscribe((v) => (position.current = v)), [api]);
  useFrame(() => {
    if (props?.selected && !props?.isMobile) {
      api.applyForce(
        vec
          .set(
            ...[
              position.current[0] - 6,
              position.current[1] - 1,
              position.current[2],
            ]
          )
          .normalize()
          .multiplyScalar(-1)
          .multiplyScalar(7)
          .toArray(),
        [0, 0, 0]
      );
    } else {
      api.applyForce(
        vec
          .set(
            ...[
              position.current[0],
              position.current[1] + (props?.selected ? 7 : 0),
              position.current[2],
            ]
          )
          .normalize()
          .multiplyScalar(-1)
          .multiplyScalar(7)
          .toArray(),
        [0, 0, 0]
      );
    }
  });
  const [ref, api] = useBox(() => ({ mass: 2, args: [3, 2.8, 1.25] }));
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Production.geometry}
        material={nodes.Production.material}
        material-color={"#CF4450"}
        scale={[1, 1, 0.12]}
      />
    </group>
  );
}
