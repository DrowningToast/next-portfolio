import { AnimatePresence, motion } from "framer-motion";
import InternScene from "@components/r3f/Scenes/Intern";
import React, { Dispatch, SetStateAction, Suspense, useMemo } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  setAnimating: Dispatch<SetStateAction<"LP" | "Intern" | null>>;
  setSelected: Dispatch<SetStateAction<"LP" | "Intern" | null>>;
  selected: "LP" | "Intern" | null;
  animating: "LP" | "Intern" | null;
}

const Intern: React.FC<Props> = ({
  setAnimating,
  setSelected,
  selected,
  animating,
}) => {
  const isSelected = useMemo<boolean>(() => {
    return selected === "Intern";
  }, [selected]);
  const isAnimating = useMemo<boolean>(() => {
    return animating === "Intern";
  }, [animating]);

  return (
    <motion.div
      layout
      onClick={() => {
        console.log(animating === "LP");
        if (animating === "LP") return;

        setAnimating("Intern");
        setSelected(isSelected ? null : "Intern");
      }}
      className={`bg-intern cursor-pointer lg:rounded-none rounded-xl overflow-hidden ${
        isAnimating ? "z-30" : "z-20"
      } ${
        isSelected ? "absolute md:inset-8 inset-2 " : "relative w-full h-full "
      }`}
      onLayoutAnimationComplete={() => {
        if (selected !== "Intern") setAnimating(null);
      }}
    >
      <motion.div
        layout
        className={`absolute inset-0 z-40 rounded-lg overflow-hidden lg:rounded-none md:overflow-auto ${
          isSelected
            ? ""
            : "lg:inset-y-16 md:inset-y-4 inset-y-2 lg:inset-x-0 md:inset-x-4 inset-x-2 "
        }`}
      >
        <Suspense fallback={null}>
          <InternScene selected={selected} />
        </Suspense>
        <motion.div
          layout
          className={`absolute flex flex-col ${
            !isSelected
              ? "items-center inset-x-0 inset-y-10"
              : "items-start md:px-20 px-4 md:gap-y-6 gap-y-2 min-h-full inset-0 md:py-16 py-8"
          } justify-start `}
        >
          <motion.div className="flex items-center md:gap-x-6 gap-x-4" layout>
            {isSelected && (
              <FontAwesomeIcon
                className="text-4xl text-primary inline w-auto cursor-pointer"
                icon={["fas", "angle-left"]}
              />
            )}
            <motion.h1
              layout
              className={`font-eb font-bold ${
                isSelected
                  ? "lg:text-8xl md:text-6xl text-4xl md:text-start text-center"
                  : "lg:text-6xl md:text-7xl text-4xl"
              }  text-primary`}
            >
              INTERNSHIP
            </motion.h1>
          </motion.div>
          <motion.h2
            layout
            className="font-helvetica lg:text-xl md:text-2xl text-sm text-center text-secondary md:w-auto md:inline w-full inline-block"
          >
            Computer major internship website
          </motion.h2>
          <AnimatePresence>
            {!isSelected && (
              <motion.div
                key="bg"
                layout
                initial={{
                  opacity: 0,
                  width: "100%",
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.7,
                  },
                }}
                exit={{
                  opacity: 0,
                  width: "100%",
                  transition: {
                    duration: 0.2,
                  },
                }}
                style={{
                  backgroundImage: 'url("/assets/png/intern.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-full lg:h-56 h-40 relative mt-auto lg:flex hidden"
              ></motion.div>
            )}
            {isSelected && (
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
                During summer 2021, It’s required that for grade 11 students to
                take an internship for a specific amount of hours. The
                internship was a great opportunity for the students to step out
                to the real field, subsequently students should be developedfor
                the future market labor.
                <br />
                <br />I worked with developer team and in was in charged in
                creative side and assisted on design and layout.
              </motion.p>
            )}
            {isSelected && (
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
                  Supported and deployed on
                </motion.span>
                <div className="flex-start items-center md:h-24 h-10 relative w-full gap-x-4 mt-4 ">
                  <div className="md:w-auto w-28">
                    <Image
                      src="/assets/png/swu.png"
                      layout="intrinsic"
                      alt="SWU"
                      width={250}
                      height={80}
                    />
                  </div>
                </div>
                <a
                  className="mt-auto mx-auto self-center md:mt-0 md:mx-0 mb-8 md:mb-0"
                  href="https://internship-five.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
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
  );
};

export default Intern;
