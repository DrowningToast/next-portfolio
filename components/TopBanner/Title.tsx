import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import ReactTypingEffect from "react-typing-effect";

const transitionDelay = 1.25;
const transitionDuration = 2.25;
// const fadeInDuration = 0.75;

interface Props {
  handleContinue: () => void;
}

const Title: React.FC<Props> = ({ handleContinue }) => {
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
        layout
        onClick={() => {
          if (!isTranslated || isContinued) return;
          handleContinue();
          setContinued(true);
        }}
        initial="border"
        animate={`${!isContinued ? "border" : "noBorder"}`}
        variants={{
          border: {
            padding: "2.25rem 2rem",
            transition: {
              delay: transitionDelay,
              duration: transitionDuration,
            },
          },
          noBorder: {
            padding: "0rem 0rem",
            transition: {
              duration: transitionDuration,
            },
          },
        }}
        className={`w-full h-screen grid place-items-center relative ${
          isTranslated && !isContinued ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <motion.div
          initial="noBorder"
          animate={`${!isContinued ? "border" : "noBorder"}`}
          variants={{
            border: {
              padding: "2.5rem 4.5rem",
              borderWidth: 2,
              transition: {
                delay: transitionDelay,
                duration: transitionDuration,
              },
            },
            noBorder: {
              padding: "2.5rem 4.5rem",

              borderWidth: 0,
              transition: {
                duration: transitionDuration,
              },
            },
          }}
          layout
          className={`border-tertiary w-full h-full relative ${
            !isTranslated
              ? "grid place-items-center flex-row"
              : "flex items-start"
          } `}
        >
          <motion.div
            initial={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            animate={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              transition: {
                delay: transitionDelay,
                duration: transitionDuration,
              },
            }}
            layout
            className={`gap-x-6 gap-y-8 relative z-20 ${
              !isTranslated
                ? "flex flex-col justify-center items-center"
                : "flex flex-row justify-start items-center"
            } `}
          >
            {/* Emoji */}
            <motion.div
              layout
              layoutId="wave"
              initial={{
                width: 140,
                height: 140,
              }}
              animate={{
                width: 45,
                height: 45,
                transition: {
                  delay: transitionDelay,
                  duration: transitionDuration / 2,
                },
              }}
              className="relative"
            >
              <Image src="/assets/png/waving-hand.png" layout="fill" priority />
            </motion.div>
            <motion.h1
              initial={{
                display: "inline",
                opacity: 1,
                fontSize: "6rem",
              }}
              animate={{
                fontSize: "2rem",
                transition: {
                  delay: transitionDelay,
                  duration: transitionDuration / 2,
                },
              }}
              layout
              layoutId="introductionTitle"
              className="text-tertiary text-8xl font-semibold gap-x-4"
            >
              Hi, my name is{" "}
              <motion.span
                initial={{ color: "rgb(72 124 226)" }}
                animate={{
                  color: "rgb(149 179 238)",
                  transition: {
                    delay: transitionDelay,
                    duration: transitionDuration,
                  },
                }}
                layout
                className="text-secondary"
              >
                Gus
              </motion.span>
            </motion.h1>
            <motion.h4
              initial={{
                display: "inline",
                opacity: 1,
              }}
              animate={{
                opacity: 0,
                transition: {
                  delay: transitionDelay * 0.9,
                  duration: transitionDuration / 4,
                },
              }}
              layout
              className="font-helvetica font-extralight text-tertiary text-2xl tracking-widest	"
            >
              Full-stack Developer
            </motion.h4>
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
            className="absolute inset-0 py-10 px-16 flex justify-between"
          >
            {/* Today Date */}
            <h5 className=" text-white self-end">
              {new Date().toDateString()}
            </h5>
            {/* Personal Portfolio */}
            <h5 className=" text-white self-start">Personal Portfolio</h5>
            {/* Continue Button */}
            <AnimatePresence exitBeforeEnter>
              {!isContinued && (
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
              className="absolute inset-0 flex flex-col items-start justify-center text-tertiary font-eb left-20 z-20"
            >
              <h3 className="font-semibold text-4xl">AND I MAKE</h3>
              <motion.div
                animate={`${!isContinued ? "big" : "small"}`}
                variants={{
                  big: {
                    fontSize: "190px",
                  },
                  small: {
                    fontSize: "170px",
                    transition: {
                      duration: transitionDuration,
                    },
                  },
                }}
                className="font-bold text-primary"
              >
                <ReactTypingEffect
                  text={websites_list.map((website) => {
                    return website.toUpperCase();
                  })}
                  className="font-eb"
                  cursor=" "
                />
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
  "Websites",
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
];
