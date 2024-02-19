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
      className={`absolute inset-2 cursor-pointer overflow-hidden rounded-xl bg-intern md:inset-8 lg:rounded-none`}
    >
      <motion.div
        layout
        className={`absolute inset-0 z-40 overflow-hidden rounded-lg md:overflow-auto lg:rounded-none`}
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
          className={`absolute inset-0 flex min-h-full max-w-3xl flex-col items-start justify-start gap-y-2 px-4 py-8 md:gap-y-6 md:px-20 md:py-16 `}
        >
          <motion.div
            className="flex w-full items-center justify-center gap-x-4 text-4xl md:justify-start md:gap-x-6"
            layout
          >
            <motion.h1
              layout
              className={`font-eb text-center text-4xl font-bold text-primary md:text-start md:text-6xl lg:text-8xl`}
            >
              INTERNSHIP
            </motion.h1>
          </motion.div>
          <motion.h2
            layout
            className="font-helvetica inline-block w-full text-center text-xs text-secondary md:inline md:w-auto md:text-2xl lg:text-xl"
          >
            Computer major internship website
          </motion.h2>
          <AnimatePresence>
            <motion.p
              key="description"
              layout
              className="font-helvetica text-xs text-secondary md:text-base"
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
              className="flex w-full grow flex-col md:mt-auto md:block md:w-auto md:grow-0"
            >
              <motion.span
                layout
                className="font-helvetica text-sm text-secondary md:text-lg"
              >
                Supported and deployed on
              </motion.span>
              <div className="flex-start relative mt-4 h-10 w-full items-center gap-x-4 md:h-24 ">
                <div className="w-28 md:w-auto">
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
                className="mx-auto mb-8 mt-auto self-center md:m-0"
                href="https://internship-five.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="font-eb rounded-full bg-primary px-14 py-2 text-center text-base font-semibold text-tertiary md:text-lg lg:p-2">
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
