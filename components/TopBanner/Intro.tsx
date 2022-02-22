import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const waveDuration = 1.25;
const fadeInDuration = 0.75;
const staggerConstand = 0.25;

interface Props {
  handleAnimationComplete: () => void;
}

const Intro: React.FC<Props> = ({ handleAnimationComplete }) => {
  const [start, setStart] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <>
      {/* Desktop */}
      <section className="w-full h-screen  grid place-items-center">
        <motion.div
          layout
          className="flex flex-col gap-y-8 items-center justify-center"
        >
          {/* Emoji */}
          <motion.div
            layout
            layoutId="wave"
            initial={{
              width: 260,
              height: 260,
            }}
            animate={{
              width: 140,
              height: 140,
              transition: {
                delay: waveDuration,
                duration: fadeInDuration,
              },
            }}
            className="relative"
          >
            <Image src="/assets/png/waving-hand.png" layout="fill" priority />
          </motion.div>
          <motion.h1
            initial={{
              display: "none",
              opacity: 0,
            }}
            animate={{
              display: "inline",
              opacity: 1,
              transition: {
                delay: waveDuration,
                duration: fadeInDuration,
              },
            }}
            layout
            layoutId="introductionTitle"
            className="text-tertiary text-8xl font-semibold"
          >
            Hi, my name is <span className="text-primary">Gus</span>
          </motion.h1>
          <motion.h4
            initial={{
              display: "none",
              opacity: 0,
            }}
            animate={{
              display: "inline",
              opacity: 1,
              transition: {
                delay: waveDuration + staggerConstand + 0.25,
                duration: fadeInDuration,
              },
            }}
            onAnimationComplete={handleAnimationComplete}
            layout
            className="font-helvetica font-extralight text-tertiary text-2xl tracking-widest	"
          >
            Full-stack Developer
          </motion.h4>
        </motion.div>
      </section>
    </>
  );
};

export default Intro;
