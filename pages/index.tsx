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
import Contact from "@components/Contact/Contact";
const Hero = dynamic(() => {
  return import("../components/r3f/Scenes/Hero");
});

const Home: NextPage = () => {
  const [finishedLoading, setLoadingStatus] = useState<boolean>(false);
  const [introComplete, setIntroComplete] = useState<boolean>(false);
  const [isContinued, setContinued] = useState<boolean>(false);
  const [finishedContinue, setFinishedContinue] = useState<boolean>(false);
  // Window Size
  const [width, height] = useWindowSize();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useViewportScroll();

  const handleLoadComplete = (e: Event) => {
    setLoadingStatus(true);
  };

  return (
    <motion.div
      className="bg-dark"
      onPointerMove={(e) => {
        mouseX.set(e.clientX / width);

        mouseY.set(e.clientY / height);
      }}
    >
      <Head>
        <title>Gus' Portfolio</title>
        <meta name="description" content="Gus' Portfolio" />
        <meta name="author" content="Supratouch Suwatno" />
        <meta name="keywords" content="Resume, Portfolio, Web Development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            isContinued={finishedContinue}
          />
        </motion.div>
      )}
      <main className="min-h-screen font-eb relative overflow-x-hidden">
        {!(finishedLoading && introComplete) ? (
          <>
            <Intro
              handleAnimationComplete={() => {
                setIntroComplete(true);
              }}
            />
          </>
        ) : (
          <Title
            handleContinue={() =>
              new Promise(async (resolve, reject) => {
                await setContinued(true);
                resolve(null);
              })
            }
            finishedContinue={() => {
              console.log("Finished Continue");
              setFinishedContinue(true);
            }}
          />
        )}

        {isContinued && (
          <>
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </>
        )}
      </main>
    </motion.div>
  );
};

useGLTF.preload("/assets/models/bust.gltf");

export default Home;
