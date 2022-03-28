import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
const ReactTypingEffect = dynamic(() => import("react-typing-effect"));
// import ReactTypingEffect from "react-typing-effect";
import dynamic from "next/dynamic";

const transitionDelay = 0.65;
const transitionDuration = 1;
// const fadeInDuration = 0.75;

interface Props {
  handleContinue: () => Promise<null>;
  finishedContinue: () => void;
  handleTransitionComplete: () => void;
  continueReady: boolean;
}

const Title: FC<Props> = ({
  handleContinue,
  finishedContinue,
  handleTransitionComplete,
  continueReady,
}) => {
  const [isTranslated, setTranslated] = useState<boolean>(false);
  const [isContinued, setContinued] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setTranslated(true);
    }, transitionDelay * 1000);
  }, []);

  return (
    <>
      {/* Desktop */}
      <motion.section
        key="title"
        layout
        layoutId="title"
        onClick={async () => {
          if ((!isTranslated || isContinued) && continueReady) return;
          await handleContinue();
          setContinued(true);
        }}
        transition={{
          duration: transitionDuration,
        }}
        className={`w-full h-screen grid place-items-center relative ${
          !isContinued ? "md:px-9 md:py-8 px-5 py-4" : "px-0 py-0"
        } ${
          continueReady && !isContinued ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <motion.div
          transition={{
            duration: transitionDuration,
          }}
          layout
          layoutId="border"
          animate={!isContinued ? "border" : "noBorder"}
          variants={{
            border: {
              borderWidth: "2px",
            },
            noBorder: {
              borderWidth: "0px",
            },
          }}
          onLayoutAnimationComplete={handleTransitionComplete}
          className={` ${
            !isContinued ? "border-2" : "border-0"
          } lg:px-10 md:px-6 px-4 lg:py-8 md:py-6 py-4 border-tertiary w-full h-full relative flex items-start`}
        >
          {/* Frame */}
          <motion.div
            transition={{
              duration: transitionDuration,
            }}
            layout
            layoutId="frame"
            className={`md:gap-x-6 gap-x-2 gap-y-8 relative z-20 flex flex-row justify-start items-center`}
          >
            {/* Emoji */}
            <motion.div
              layout
              layoutId="wave"
              transition={{
                duration: transitionDuration / 2,
              }}
              className="relative md:w-12 md:h-12 w-6 h-6"
            >
              <Image
                src="/assets/png/waving-hand.png"
                layout="fill"
                alt="Waving Emoji"
              />
            </motion.div>
            <motion.h1
              transition={{
                duration: transitionDuration / 2,
              }}
              layout
              layoutId="introductionTitle"
              className="text-tertiary lg:text-4xl md:text-3xl text-2xl font-semibold gap-x-4"
            >
              Hi, my name is{" "}
              <motion.span
                initial={{ color: "rgb(72 124 226)" }}
                animate={{
                  color: "rgb(149 179 238)",
                  transition: {
                    duration: transitionDuration,
                  },
                }}
                layout
                layoutId="gus"
                className="text-secondary"
              >
                Gus
              </motion.span>
            </motion.h1>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: transitionDelay,
                duration: transitionDuration,
              },
            }}
            className="absolute inset-0 md:py-10 md:px-16 px-3 pt-16 pb-3 flex justify-between"
          >
            {/* Today Date */}
            <h5 className=" text-white self-end">
              {new Date().toDateString()}
            </h5>
            {/* Personal Portfolio */}
            <h5 className=" text-white self-start">Personal Portfolio</h5>
            {/* Continue Button */}
            <AnimatePresence exitBeforeEnter>
              {!isContinued && continueReady && (
                <motion.h5
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: transitionDuration },
                  }}
                  exit={{ opacity: 0 }}
                  className="absolute top-3/4 left-1/2 transform -translate-x-1/2 font-eb text-xl text-center self-center py-2 border-t-2 border-b-2 border-tertiary px-4 text-white z-50"
                >
                  Click any where to continue
                </motion.h5>
              )}
            </AnimatePresence>
          </motion.div>
          {/* Main Title */}
          {isTranslated && (
            <motion.div
              layout
              initial={{ opacity: 0, display: "hidden" }}
              animate={{
                opacity: 1,
                display: "flex",
                transition: {
                  delay: transitionDuration,
                  duration: transitionDuration / 3,
                },
              }}
              transition={{
                duration: transitionDuration,
              }}
              className={`absolute inset-0 flex flex-col ${
                !isContinued
                  ? "items-start lg:left-20 left-5 "
                  : "lg:items-start items-center lg:h-full h-1/2"
              }  justify-center text-tertiary font-eb xl:left-20 lg:left-10 z-20 `}
            >
              <motion.h3
                layout
                onLayoutAnimationComplete={() => {
                  if (isContinued) finishedContinue();
                }}
                className="font-semibold lg:text-4xl md:text-3xl text-2xl uppercase"
              >
                And I make
              </motion.h3>
              <motion.div
                layout
                transition={{
                  duration: transitionDuration,
                }}
                className={`font-bold text-primary  ${
                  !isContinued
                    ? "xl:text-xxxl2 md:text-xxl text-6xl text-start"
                    : "xl:text-xxl2 lg:text-xxl md:text-xxl text-5xl md:text-start text-center"
                }`}
              >
                <AnimatePresence exitBeforeEnter>
                  {!isContinued && (
                    <motion.h1
                      key="first"
                      className="font-eb"
                      animate={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                        transition: {
                          delay: 2,
                          duration: 2,
                        },
                      }}
                    >
                      WEBSITES
                    </motion.h1>
                  )}

                  {isContinued && (
                    <motion.div
                      key="second"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          duration: 2,
                        },
                      }}
                    >
                      <ReactTypingEffect
                        text={websites_list.map((website) => {
                          return website.toUpperCase();
                        })}
                        className="font-eb"
                        cursor=" "
                        speed={400}
                        eraseDelay={5000}
                        eraseSpeed={275}
                        typingDelay={1000}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </motion.section>
    </>
  );
};

export default Title;

const websites_list = [
  "เว็ปไซต์",
  "网站",
  "sitios web",
  "ウェブサイト",
  "웹사이트",
  "Webseiten",
  "сайты",
  "các trang web",
  "لمواقع",
  "siti web",
  "ιστοσελίδες",
  "Websites",
];
