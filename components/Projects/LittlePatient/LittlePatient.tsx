import { motion, AnimatePresence } from "framer-motion";
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
  selected: string | null | undefined;
}

const LittlePatient: React.FC<Props> = ({ selected }) => {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!frame.current) return;
    frame.current.style.overflow = "hidden";
  }, []);

  return (
    <motion.div
      ref={frame}
      className={`cursor-pointer lg:rounded-none rounded-xl overflow-hidden absolute md:inset-8 inset-2 
     
      `}
    >
      {/* Canvas */}
      <motion.div
        layout
        className="absolute inset-0 z-40 bg-[rgb(195,255,234)] md:block grid grid-rows-3"
      >
        <div className="relative md:absolute w-full h-full md:inset-0">
          <div className="absolute top-0 left-0 right-0 -bottom-8">
            <Suspense fallback={null}>
              <LP />
            </Suspense>
          </div>
        </div>
        <motion.div layout className="md:absolute md:inset-0 row-span-2">
          <motion.div
            layout
            className={`z-40 text-4xl text-primary flex flex-col md:pt-16 md:pb-14 justify-start items-start md:px-8 px-4 md:gap-y-0 gap-y-4`}
          >
            <motion.div className="flex items-center md:gap-x-6 gap-x-4" layout>
              <motion.h1
                layout
                className={`font-eb lg:text-7xl md:text-4xl text-2xl md:text-start text-center font-bold`}
              >
                Little-Patient
              </motion.h1>
            </motion.div>
            <motion.h2
              layout
              className="font-helvetica lg:text-xl md:text-2xl text-xs text-left text-secondary md:w-auto md:inline w-full inline-block"
            >
              Virtual patient simulation for medical students
            </motion.h2>
            <div className="md:grid grid-cols-3">
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
                className="lg:text-base md:text-sm text-xs md:mt-6 mt-2 text-secondary font-helvetica col-span-2"
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
                className="md:mt-auto mt-6 md:flex-grow-0 flex-grow md:block flex flex-col md:w-auto w-full col-start-1"
              >
                <motion.span
                  layout
                  className="md:text-base text-xs text-secondary font-helvetica"
                >
                  Trust and Supported by
                </motion.span>
                <div className="flex flex-start items-center md:h-20 h-10 relative w-full gap-x-4 mt-4">
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
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LittlePatient;
