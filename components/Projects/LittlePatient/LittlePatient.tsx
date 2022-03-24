import {
  motion,
  AnimatePresence,
  ForwardRefComponent,
  HTMLMotionProps,
} from "framer-motion";
import React, {
  Dispatch,
  SetStateAction,
  Suspense,
  useEffect,
  useRef,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import LP from "../../r3f/Scenes/LP";

interface Props {
  setAnimating: Dispatch<SetStateAction<"LP" | "Intern" | null>>;
  setSelected: Dispatch<SetStateAction<"LP" | "Intern" | null>>;
  selected: "LP" | "Intern" | null;
  isAnimating: "LP" | "Intern" | null;
}

const LittlePatient: React.FC<Props> = ({
  setAnimating,
  setSelected,
  selected,
  isAnimating,
}) => {
  const frame = useRef<HTMLDivElement>(null);

  console.log(typeof frame.current);

  useEffect(() => {
    if (!frame.current) return;
    frame.current.style.overflow = "hidden";
  }, [frame.current]);

  return (
    <motion.div
      ref={frame}
      layout="size"
      onClick={() => {
        if (isAnimating === "Intern") return;
        setAnimating("LP");
        setSelected(selected === "LP" ? null : "LP");
      }}
      onUpdate={() => {
        if (!frame.current) return;
        frame.current.style.overflow = "auto";
      }}
      onLayoutAnimationComplete={() => {
        if (!frame.current) return;
        frame.current.style.overflow = "hidden";
      }}
      className={`cursor-pointer lg:rounded-none rounded-xl overflow-hidden  ${
        isAnimating === "LP" ? "z-30" : "z-20"
      } ${
        selected == "LP"
          ? "absolute md:inset-8 inset-2 "
          : "relative w-full h-full "
      }`}
    >
      {/* Canvas */}
      <motion.div
        onLayoutAnimationComplete={() => {
          if (selected !== "LP") setAnimating(null);
        }}
        layout
        className="absolute inset-0 z-40"
      >
        <Suspense fallback={null}>
          <LP selected={selected} />
        </Suspense>
        <motion.div layout className="absolute inset-0">
          <motion.div
            layout
            className={`z-50 text-4xl text-primary flex flex-col md:pt-28 md:pb-14 justify-start ${
              selected !== "LP"
                ? "items-center pt-28 pb-14"
                : "items-start md:px-20 px-4 md:gap-y-6 gap-y-2 min-h-full inset-0 md:py-16 py-8"
            } `}
          >
            <motion.div className="flex items-center md:gap-x-6 gap-x-4" layout>
              {selected === "LP" && (
                <FontAwesomeIcon
                  className="text-4xl text-primary inline w-auto cursor-pointer"
                  icon={["fas", "angle-left"]}
                />
              )}
              <motion.h1
                layout
                className={`font-eb ${
                  selected === "LP"
                    ? "lg:text-8xl md:text-6xl text-5xl md:text-start text-center"
                    : "lg:text-6xl md:text-7xl text-4xl"
                }  font-bold`}
              >
                Little-Patient
              </motion.h1>
            </motion.div>
            <motion.h2
              layout
              className="font-helvetica lg:text-xl md:text-2xl text-sm text-center text-secondary md:w-auto md:inline w-full inline-block"
            >
              Virtual patient simulation for medical students
            </motion.h2>
            <AnimatePresence>
              {selected === "LP" && (
                <motion.p
                  key="description"
                  layout
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 0.25,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.1,
                    },
                  }}
                  className="md:text-lg text-sm mt-6 text-secondary font-helvetica"
                >
                  During the worst of the COVID-19 in Thailand. My team was
                  inspried to develop virtual patient simulator for medical
                  students in the Thailand with Thai medical standards. The
                  simulator is designed for students to learns and practise
                  medical mindsets and medical reasoning due to lack of actual
                  patients to learn in real life.
                  <br></br>
                  <br></br>
                  I’m in charge of the project manager and lead developer.
                </motion.p>
              )}
              {selected === "LP" && (
                <motion.div
                  key="support"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 0.25,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.1,
                    },
                  }}
                  layout
                  className="md:mt-auto mt-6 md:flex-grow-0 flex-grow md:block flex flex-col md:w-auto w-full"
                >
                  <motion.span
                    layout
                    className="md:text-lg text-sm text-secondary font-helvetica"
                  >
                    Trust and Supported by
                  </motion.span>
                  <div className="flex flex-start items-center md:h-24 h-10 relative w-full gap-x-4 mt-4">
                    <div className="md:w-max w-14">
                      <Image
                        src="/assets/png/MU_LP.png"
                        layout="intrinsic"
                        alt="siriraj logo"
                        width={80}
                        height={80}
                      />
                    </div>

                    <div className="w-28">
                      <Image
                        src="/assets/png/shee-logo.png"
                        layout="responsive"
                        alt="shee logo"
                        width={160}
                        height={80}
                      />
                    </div>
                  </div>
                  <a
                    className="mt-auto mx-auto self-center md:mt-0 md:mx-0 mb-8 md:mb-0"
                    href="https://little-patient.vercel.app/"
                    target="_blank"
                  >
                    <div className="bg-primary rounded-full font-eb md:text-4xl text-3xl font-semibold text-tertiary text-center lg:px-2 lg:py-2 px-14 py-3 mt-6">
                      Visit the site
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LittlePatient;
