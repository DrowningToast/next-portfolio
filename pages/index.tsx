const Education = dynamic(() => import("@components/Education/Education"));
const Skills = dynamic(() => import("@components/Skills/Skills"));
const Projects = dynamic(() => import("@components/Projects/Projects"));
const Contact = dynamic(() => import("@components/Contact/Contact"));

import Intro from "@components/TopBanner/Intro";
// const Title = dynamic(() => import("@components/TopBanner/Title"));
import Title from "@components/TopBanner/Title";
import type { NextPage } from "next";
import { motion, useMotionValue, useViewportScroll } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";
import useWindowSize from "@components/hooks/useWindowSize";
import { useGLTF } from "@react-three/drei";
import Script from "next/script";
// import Skills from "@components/Skills/Skills";
// import Projects from "@components/Projects/Projects";
// import Contact from "@components/Contact/Contact";
const Hero = dynamic(() => {
  return import("../components/r3f/Scenes/Hero");
});

const Home: NextPage = () => {
  const [finishedLoading, setLoadingStatus] = useState<boolean>(false);
  const [introComplete, setIntroComplete] = useState<boolean>(false);
  const [isContinued, setContinued] = useState<boolean>(false);
  const [finishedContinue, setFinishedContinue] = useState<boolean>(false);
  const [beginLoad3D, setBegin3D] = useState<boolean>(false);
  const [scrollReady, setScrollReady] = useState<boolean>(false);
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
        {/* <Script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        ></Script> */}
      </Head>
      {/* Main Canvas */}
      {/* <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript> */}
      {beginLoad3D && (
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
            handleFullLoaded={setScrollReady}
            isContinued={isContinued}
            finishedContinue={finishedContinue}
          />
        </motion.div>
      )}
      <main
        className={`min-h-screen font-eb relative overflow-x-hidden ${
          scrollReady ? "" : "overflow-y-hidden max-h-screen"
        }`}
      >
        {!introComplete ? (
          <>
            <Intro
              handleAnimationComplete={() => {
                setIntroComplete(true);
              }}
            />
          </>
        ) : (
          <Title
            continueReady={finishedLoading}
            handleContinue={() =>
              new Promise(async (resolve, reject) => {
                await setContinued(true);
                resolve(null);
              })
            }
            handleTransitionComplete={() => setBegin3D(true)}
            finishedContinue={() => {
              console.log("Finished Continue");
              setFinishedContinue(true);
            }}
          />
        )}

        {isContinued && (
          <div className={`${scrollReady ? "" : "opacity-0"}`}>
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </div>
        )}
      </main>
    </motion.div>
  );
};

// useGLTF.preload("/assets/models/hand.glb");

export default Home;
