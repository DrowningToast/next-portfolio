/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { Suspense, useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import Image from "next/image";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

export default function Television({ ...props }) {
  const group = useRef();
  const model = useRef();

  const { nodes, materials } = useGLTF("/assets/models/Television_01_4k.gltf");
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.Television_01.geometry}
          material={materials.Television_01}
          ref={model}
        />
        {model?.current && (
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            shadow-mapSize={[512, 512]}
            castShadow
            target={model.current}
          />
        )}
        <Suspense fallback={null}>
          <Html
            scale={0.1}
            rotation={[0, 0, 0]}
            position={[-0.065, 0.26, 0.2]}
            transform
            occlude
            center
          >
            <MotionConfig
              transition={{
                duration: 0.2,
                delay: 0,
              }}
            >
              <motion.div className=" w-34 h-28 flex justify-center items-center flex-col relative">
                <AnimatePresence exitBeforeEnter>
                  {props.selected === null && (
                    <>
                      <motion.h2
                        key="title"
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="text-center text-xs"
                      >
                        Let's create something together
                      </motion.h2>
                      <motion.h1
                        key="sub"
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="text-2xl pointer-events-none"
                      >
                        Get in touch!
                      </motion.h1>
                    </>
                  )}
                  {props.selected === "github" && (
                    <motion.div
                      key="github"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                    >
                      <Image
                        className="pointer-events-none"
                        width={64}
                        height={64}
                        src="/assets/png/Github.png"
                      />
                    </motion.div>
                  )}
                  {props.selected === "linkedin" && (
                    <motion.div
                      key="linkedin"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                    >
                      <Image
                        width={64}
                        className="pointer-events-none"
                        height={64}
                        src="/assets/png/LinkedIn.png"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </MotionConfig>
          </Html>
        </Suspense>
      </group>
    </>
  );
}
