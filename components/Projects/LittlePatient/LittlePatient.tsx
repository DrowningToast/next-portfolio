import { motion, AnimatePresence } from "framer-motion";
import React, { Dispatch, SetStateAction, Suspense } from "react";
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
  return (
    <motion.div
      onClick={() => {
        setAnimating("LP");
        setSelected(selected === "LP" ? null : "LP");
      }}
      layout
      className={`cursor-pointer ${isAnimating === "LP" ? "z-30" : "z-20"} ${
        selected == "LP" ? "absolute inset-8 " : "relative w-full h-full "
      }`}
      onLayoutAnimationComplete={() => {
        if (!selected) setAnimating(null);
      }}
    >
      {/* Canvas */}
      <div className="absolute inset-0 z-40">
        <Suspense fallback={null}>
          <LP selected={selected} />
        </Suspense>
        <motion.div layout className="absolute inset-0">
          <motion.div
            layout
            className={`z-50 text-4xl text-primary flex flex-col pt-28 pb-14 justify-start ${
              selected !== "LP"
                ? "items-center"
                : "items-start px-20 gap-y-6 max-w-3xl min-h-full"
            } `}
          >
            <motion.div className="flex items-center gap-x-6" layout>
              {selected === "LP" && (
                <FontAwesomeIcon
                  className="text-4xl text-primary inline w-auto cursor-pointer"
                  icon={["fas", "angle-left"]}
                />
              )}

              <motion.h1
                layout
                className={`font-eb ${
                  selected === "LP" ? "text-8xl" : "text-6xl"
                }  font-bold`}
              >
                Little-Patient
              </motion.h1>
            </motion.div>
            <motion.h2 layout className="font-helvetica text-xl text-secondary">
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
                  className="text-lg mt-6 text-secondary font-helvetica"
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
                  className="mt-auto"
                >
                  <motion.span
                    layout
                    className="text-lg text-secondary font-helvetica"
                  >
                    Trust and Supported by
                  </motion.span>
                  <div className="flex flex-start items-center h-24 relative w-full gap-x-4 mt-4">
                    <div className="">
                      <Image
                        src="/assets/png/MU_LP.png"
                        layout="intrinsic"
                        alt="siriraj logo"
                        width={80}
                        height={80}
                      />
                    </div>

                    <div>
                      <Image
                        src="/assets/png/shee-logo.png"
                        layout="intrinsic"
                        alt="shee logo"
                        width={160}
                        height={80}
                      />
                    </div>
                  </div>
                  <a href="https://little-patient.vercel.app/" target="_blank">
                    <div className="bg-primary rounded-full font-eb text-4xl font-bol text-tertiary text-center px-2 py-2 mt-6">
                      Visit the site
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LittlePatient;
