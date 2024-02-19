import { motion, AnimatePresence } from "framer-motion";
import React, { Suspense, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const LP = dynamic(() => import("@components/r3f/Scenes/LP"), {
  ssr: false,
});

const LittlePatient: React.FC = () => {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!frame.current) return;
    frame.current.style.overflow = "hidden";
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2,
        },
      }}
      exit={{
        opacity: 0,
      }}
      key={"Little-Patient"}
      ref={frame}
      className={`absolute inset-2 cursor-pointer overflow-hidden rounded-xl md:inset-8 lg:rounded-none`}
    >
      {/* Canvas */}
      <motion.div
        layout
        className="absolute inset-0 z-40 grid place-items-center bg-[rgb(195,255,234)] md:block"
      >
        <div className="absolute inset-0 size-full">
          <Suspense fallback={null}>
            <LP />
          </Suspense>
        </div>
        <motion.div
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
          className="grid size-full place-items-center md:absolute md:inset-0"
        >
          <motion.div
            layout
            className={`z-40 flex flex-col items-start justify-start gap-y-4 px-4 text-4xl text-primary md:gap-y-0 md:px-8 md:pb-14 md:pt-16`}
          >
            <motion.div className="flex items-center gap-x-4 md:gap-x-6" layout>
              <motion.h1
                layout
                className={`font-eb text-center text-2xl font-bold md:text-start md:text-4xl lg:text-7xl`}
              >
                Little-Patient
              </motion.h1>
            </motion.div>
            <motion.h2
              layout
              className="font-helvetica inline-block w-full text-left text-xs text-secondary md:inline md:w-auto md:text-2xl lg:text-xl"
            >
              Virtual patient simulation for medical students
            </motion.h2>
            <div className="grid-cols-3 md:grid">
              <motion.p
                key="description"
                layout
                className="font-helvetica col-span-2 mt-2 text-xs text-secondary md:mt-6 md:text-sm lg:text-base"
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
                className="col-start-1 mt-6 flex w-full grow flex-col md:mt-auto md:block md:w-auto md:grow-0"
              >
                <motion.span
                  layout
                  className="font-helvetica text-xs text-secondary md:text-base"
                >
                  Trust and Supported by
                </motion.span>
                <div className="flex-start relative mt-4 flex h-10 w-full items-center gap-x-4 md:h-20">
                  <div className="w-14 md:w-max">
                    <Image
                      src="/assets/png/MU_LP.png"
                      layout="intrinsic"
                      alt="siriraj logo"
                      width={80}
                      height={80}
                      priority
                    />
                  </div>

                  <div className="w-28">
                    <Image
                      src="/assets/png/shee-logo.png"
                      layout="responsive"
                      alt="shee logo"
                      width={160}
                      height={80}
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LittlePatient;
