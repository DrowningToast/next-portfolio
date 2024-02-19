import { type FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const waveDuration = 0.125;
const fadeInDuration = 0.75;
const staggerConstand = 0.125;

interface Props {
  handleAnimationComplete: () => void;
}

const Intro: FC<Props> = ({ handleAnimationComplete }) => {
  return (
    <>
      {/* Desktop */}
      <motion.section
        layoutId="title"
        key="intro"
        layout
        className="grid h-svh  w-full place-items-center"
      >
        <motion.div
          layout
          layoutId="border"
          className={`relative flex size-full items-center justify-center border-0 border-tertiary`}
        >
          {/* Frame */}
          <motion.div
            layout
            layoutId="frame"
            className="flex flex-col items-center justify-center gap-y-6"
          >
            {/* Emoji Client Only */}
            <motion.div
              transition={{
                duraiton: fadeInDuration,
              }}
              layout
              layoutId="wave"
              className="relative h-xxxl w-xxxl md:h-xxxl2 md:w-xxxl2"
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
              className="inline-block text-4xl font-semibold text-tertiary md:text-6xl lg:text-8xl"
            >
              Hi, my name is{" "}
              <motion.span
                layout
                layoutId="gus"
                className="inline-block text-primary "
              >
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
              className="font-helvetica inline-block text-lg font-extralight tracking-widest text-tertiary md:text-2xl	"
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
