import { AnimatePresence, motion } from "framer-motion";
const InternScene = dynamic(() => import("@components/r3f/Scenes/Intern"), {
  ssr: false,
});
import React, { Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const Intern: React.FC = ({ }) => {
  return (
    <motion.div
      layout
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
      key={"internship-report"}
      className={`bg-intern cursor-pointer lg:rounded-none rounded-xl overflow-hidden absolute md:inset-8 inset-2`}
    >
      <motion.div
        layout
        className={`absolute inset-0 z-40 rounded-lg overflow-hidden lg:rounded-none md:overflow-auto`}
      >
        <Suspense fallback={null}>
          {InternScene && <InternScene selected={true} />}
        </Suspense>
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
          className={`absolute flex flex-col items-start md:px-20 px-4 md:gap-y-6 gap-y-2 max-w-3xl min-h-full inset-0 md:py-16 py-8 justify-start `}
        >
          <motion.div
            className="flex items-center md:gap-x-6 gap-x-4 text-4xl justify-center md:justify-start w-full"
            layout
          >
            <motion.h1
              layout
              className={`font-eb font-bold lg:text-8xl md:text-6xl text-4xl md:text-start text-center text-primary`}
            >
              INTERNSHIP
            </motion.h1>
          </motion.div>
          <motion.h2
            layout
            className="font-helvetica lg:text-xl md:text-2xl text-xs text-center text-secondary md:w-auto md:inline w-full inline-block"
          >
            Computer major internship website
          </motion.h2>
          <AnimatePresence>
            <motion.p
              key="description"
              layout
              className="md:text-base text-xs text-secondary font-helvetica"
            >
              During summer 2021, It’s required that for grade 11 students to
              take an internship for a specific amount of hours. The internship
              was a great opportunity for the students to step out to the real
              field, subsequently students should be developed for the future
              market labor.
              <br />
              <br />I worked with developer team and in was in charged in
              creative side and assisted on design and layout.
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
              className="md:mt-auto md:flex-grow-0 flex-grow md:block flex flex-col md:w-auto w-full"
            >
              <motion.span
                layout
                className="md:text-lg text-sm text-secondary font-helvetica"
              >
                Supported and deployed on
              </motion.span>
              <div className="flex-start items-center md:h-24 h-10 relative w-full gap-x-4 mt-4 ">
                <div className="md:w-auto w-28">
                  <Image
                    src="/assets/png/swu.png"
                    layout="intrinsic"
                    alt="SWU"
                    width={218.75}
                    height={70}
                    priority
                  />
                </div>
              </div>
              <Link
                className="mt-auto mx-auto self-center md:mt-0 md:mx-0 mb-8 md:mb-0"
                href="https://internship-five.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-primary rounded-full font-eb md:text-lg text-base font-semibold text-tertiary text-center lg:px-2 lg:py-2 px-14 py-2">
                  Visit the site
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Intern;
