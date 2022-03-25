import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const waveDuration = 2.25;
const fadeInDuration = 1.75;
const staggerConstand = 1;

interface Props {
  handleAnimationComplete: () => void;
}

const Intro: React.FC<Props> = ({ handleAnimationComplete }) => {
  return (
    <>
      {/* Desktop */}
      <motion.section
        layoutId="title"
        key="intro"
        layout
        className="w-full h-screen  grid place-items-center"
      >
        <motion.div
          layout
          layoutId="border"
          className={`border-tertiary border-0 w-full h-full relative flex items-center justify-center`}
        >
          {/* Frame */}
          <motion.div
            layout
            layoutId="frame"
            className="flex flex-col gap-y-6 items-center justify-center"
          >
            {/* Emoji Client Only */}
            <motion.div
              transition={{
                duraiton: fadeInDuration,
              }}
              layout
              layoutId="wave"
              className="relative md:w-xxxl2 md:h-xxxl2 w-xxxl h-xxxl"
            >
              <Image
                src="/assets/png/waving-hand.png"
                layout="fill"
                priority
                alt="Waving Emoji"
              />
            </motion.div>
            )
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
              className="text-tertiary lg:text-8xl md:text-6xl text-4xl font-semibold"
            >
              Hi, my name is{" "}
              <motion.span layout layoutId="gus" className="text-primary">
                Gus
              </motion.span>
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
              layout
              onAnimationComplete={handleAnimationComplete}
              className="font-helvetica font-extralight text-tertiary md:text-2xl text-lg tracking-widest	"
            >
              Full-stack Developer
            </motion.h4>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Intro;
