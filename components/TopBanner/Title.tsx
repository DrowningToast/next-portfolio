import { type FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
const ReactTypingEffect = dynamic(() => import("react-typing-effect"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";

const transitionDelay = 0.65;
const transitionDuration = 1;

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

  const router = useRouter();

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
          if (!isTranslated || isContinued || !continueReady) return;
          await handleContinue();
          setContinued(true);
        }}
        transition={{
          duration: transitionDuration,
        }}
        className={`relative grid h-svh w-full place-items-center ${!isContinued ? "px-5 py-4 md:px-9 md:py-8" : "p-0"
          } ${continueReady && !isContinued ? "cursor-pointer" : "cursor-default"
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
          className={` ${!isContinued ? "border-2" : "border-0"
            } relative flex size-full items-start border-tertiary p-4 md:p-6 lg:px-10 lg:py-8`}
        >
          {/* Frame */}
          <motion.div
            transition={{
              duration: transitionDuration,
            }}
            layout
            layoutId="frame"
            className={`relative z-50 flex flex-row items-center justify-start gap-x-2 gap-y-8 md:gap-x-6`}
          >
            {/* Emoji */}
            <motion.div
              layout
              layoutId="wave"
              transition={{
                duration: transitionDuration / 2,
              }}
              className="relative size-6 md:size-12"
            >
              <Image
                src="/assets/png/waving-hand.png"
                layout="fill"
                alt="Waving Emoji"
                priority
              />
            </motion.div>
            <motion.h1
              transition={{
                duration: transitionDuration / 2,
              }}
              layout
              layoutId="introductionTitle"
              className="gap-x-4 text-2xl font-semibold text-tertiary md:text-3xl lg:text-4xl"
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
            {/* <Link
              href="https://webring.wonderful.software#supratouch.dev"
              passHref
            >
              <motion.a
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 2,
                    duration: 1,
                  },
                }}
                title="วงแหวนเว็บ"
                className="z-30 flex flex-col justify-center mr-4"
              >
                <Image
                  alt="วงแหวนเว็บ"
                  width="28"
                  height="28"
                  src="https://webring.wonderful.software/webring.white.svg"
                />
              </motion.a>
            </Link> */}
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
            className="absolute inset-0 flex justify-between px-2 pb-3 pt-16 sm:px-3 md:px-16 md:py-10"
          >
            {/* Today Date */}
            <h5 className=" self-end text-xs text-white md:text-base">
              {new Date().toDateString()}
            </h5>
            {/* Personal Portfolio */}
            {/* <h5 className=" text-white self-start md:inline hidden">
              Personal Portfolio
            </h5> */}
            {/* Continue Button */}
            <AnimatePresence mode="wait">
              {!isContinued && continueReady && (
                <motion.h5
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: transitionDuration },
                  }}
                  exit={{ opacity: 0 }}
                  className="font-eb absolute left-1/2 top-3/4 z-50 -translate-x-1/2 self-center border-y-2 border-tertiary px-4 py-2 text-center text-xl text-white"
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
              className={`absolute inset-0 flex flex-col ${!isContinued
                ? "left-2 items-start lg:left-20"
                : "h-1/2 items-center lg:h-full lg:items-start"
                }  font-eb z-20 justify-center text-tertiary lg:left-10 xl:left-20 `}
            >
              <motion.h3
                layout
                onLayoutAnimationComplete={() => {
                  if (isContinued) finishedContinue();
                }}
                className="text-2xl font-semibold uppercase md:text-3xl lg:text-4xl"
              >
                And I make
              </motion.h3>
              <motion.div
                layout
                transition={{
                  duration: transitionDuration,
                }}
                className={`font-bold text-primary  ${!isContinued
                  ? "text-start text-6xl md:text-xxl xl:text-xxxl2"
                  : "text-center text-5xl md:text-start md:text-xxl lg:text-xxl xl:text-xxl2"
                  }`}
              >
                <AnimatePresence mode="wait">
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
                      {ReactTypingEffect && (
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
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
        {isContinued && (
          <motion.div
            onClick={() => {
              router.push("/#main-content");
            }}
            animate={{
              y: ["-15%", "25%"],
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.2,
                ease: "easeIn",
                delay: 3,
              },
            }}
            className="absolute left-1/2 top-3/4 -translate-x-1/2 md:left-1/4"
          >
            <motion.div className="z-50 grid -translate-x-1/2 cursor-pointer place-items-center rounded-full border-2 border-white p-2">
              <motion.div className="grid size-8 place-items-center text-white">
                <FontAwesomeIcon
                  className="scale-150"
                  icon={faMouse as IconProp}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
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
