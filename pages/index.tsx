import Intro from "@components/TopBanner/Intro";
import Title from "@components/TopBanner/Title";
import Education from "@components/Education/Education";
import type { NextPage } from "next";
import {
  makeUseVisualState,
  motion,
  useElementScroll,
  useMotionValue,
  useViewportScroll,
} from "framer-motion";
import Head from "next/head";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useWindowSize from "@components/hooks/useWindowSize";
import { useGLTF } from "@react-three/drei";
import Skills from "@components/Skills/Skills";
import Projects from "@components/Projects/Projects";
const Hero = dynamic(() => {
  return import("../components/r3f/Scenes/Hero");
});

const Home: NextPage = () => {
  const [finishedLoading, setLoadingStatus] = useState<boolean>(false);
  const [introComplete, setIntroComplete] = useState<boolean>(false);
  const [isContinued, setContinued] = useState<boolean>(false);
  // Window Size
  const [width, height] = useWindowSize();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useViewportScroll();

  const handleLoadComplete = (e: Event) => {
    setLoadingStatus(true);
  };

  // mouseY.onChange(() => {
  //   console.log(mouseY.get());
  // });

  return (
    <motion.div
      className="bg-dark"
      onPointerMove={(e) => {
        mouseX.set(e.clientX / width);
        // console.log(`${e.clientY} ${scrollY.get()}`);
        // console.log(e.clientY - scrollY.get());
        // console.log(scrollY.get());
        mouseY.set(e.clientY / height);
      }}
    >
      <Head>
        <title>Gus' Portfolio</title>
        <meta name="description" content="Gus' 3D Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen font-eb relative overflow-x-hidden">
        {!(finishedLoading && introComplete) ? (
          <Intro
            handleAnimationComplete={() => {
              setIntroComplete(true);
            }}
          />
        ) : (
          <Title handleContinue={() => setContinued(true)} />
        )}
        {isContinued && (
          <>
            <Education />
            <Skills />
            <Projects />
          </>
        )}
      </main>
      {/* Main Canvas */}
      {introComplete && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1,
              duration: 2,
            },
          }}
          className="top-0 fixed min-h-screen w-screen grid place-items-center"
        >
          <Hero
            mouseX={mouseX}
            mouseY={mouseY}
            scrollY={scrollY}
            handleLoadComplete={handleLoadComplete}
            isContinued={isContinued}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

useGLTF.preload("/assets/models/bust.gltf");

export default Home;
