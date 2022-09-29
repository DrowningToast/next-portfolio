import Education from "@components/Education/Education";
import Skills from "@components/Skills/Skills";
import Projects from "@components/Projects/Projects";
import Contact from "@components/Contact/Contact";
import { NextSeo } from "next-seo";
import Intro from "@components/TopBanner/Intro";
import Title from "@components/TopBanner/Title";
import type { NextPage } from "next";
import { motion, useMotionValue, useScroll } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";
import useWindowSize from "@components/hooks/useWindowSize";
import LandingBlog from "@components/Blog/Landing";
const Hero = dynamic(
  () => {
    return import("../components/r3f/Scenes/Hero");
  },
  {
    ssr: false,
  }
);

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
  const { scrollY } = useScroll();

  const handleLoadComplete = () => {
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
      <NextSeo
        title="Gus' Portfolio"
        canonical="https://supratouch.dev"
        description="3D personal portfolio website"
        openGraph={{
          url: "https://supratouch.dev",
          images: [
            {
              url: "https://supratouch.dev/assets/png/waving-hand.png",
              width: 160,
              height: 160,
              alt: "Waving hand alt",
              type: "image/png",
            },
          ],
        }}
      />
      {/* <Head>
        <title>Gus' Portfolio</title>
        <meta name="description" content="Gus' Portfolio" />
        <meta name="author" content="Supratouch Suwatno" />
        <meta name="keywords" content="Resume, Portfolio, Web Development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {beginLoad3D && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
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
      <div
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
              setFinishedContinue(true);
            }}
          />
        )}

        <div
          id="main-content"
          className={`${scrollReady && isContinued ? "" : "opacity-0"}`}
        >
          <Education />
          <Skills />
          <Projects />
          {true && <LandingBlog />}
          <Contact />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
