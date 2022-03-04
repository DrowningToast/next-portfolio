import { AnimatePresence, motion } from "framer-motion";
import InternScene from "@components/r3f/Scenes/Intern";
import React, { Dispatch, SetStateAction, useMemo } from "react";
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
        setAnimating("Intern");
        setSelected(isSelected ? null : "Intern");
      }}
      className={`cursor-pointer bg-intern ${isAnimating ? "z-30" : "z-20"} ${
        isSelected ? "absolute inset-8" : "w-full h-full relative"
      }`}
      onLayoutAnimationComplete={() => {
        if (!isSelected) setAnimating(null);
      }}
    >
      <motion.div
        layout
        className={`absolute  bg-white py-16 flex flex-col ${
          !isSelected
            ? "items-center inset-x-0 inset-y-10"
            : "items-start px-20 gap-y-6 min-h-full inset-0"
        } justify-start `}
      >
        <motion.div className="flex items-center gap-x-6" layout>
          {isSelected && (
            <FontAwesomeIcon
              className="text-4xl text-primary inline w-auto cursor-pointer"
              icon={["fas", "angle-left"]}
            />
          )}
          <motion.h1
            layout
            className={`font-eb font-bold ${
              isSelected ? "text-8xl" : "text-6xl"
            }  text-primary`}
          >
            INTERNSHIP
          </motion.h1>
        </motion.div>
        <motion.h2 layout className="text-secondary text-xl font-helvetica">
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
              }}
              style={{
                backgroundImage: 'url("/assets/png/intern.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-56 relative mt-auto"
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
              className="text-lg mt-6 max-w-2xl text-secondary font-helvetica"
            >
              During summer 2021, It’s required that for grade 11 students to
              take an internship for a specific amount of hours. The internship
              was a great opportunity for the students to step out to the real
              field, subsequently students should be developedfor the future
              market labor.
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
              className="mt-auto"
            >
              <motion.span
                layout
                className="text-lg font-helvetica text-secondary"
              >
                Supported and deployed on
              </motion.span>
              <div className="flex flex-start items-center h-24 relative w-full gap-x-4 mt-4">
                <div className="">
                  <Image
                    src="/assets/png/swu.png"
                    layout="intrinsic"
                    alt="SWU"
                    width={250}
                    height={80}
                  />
                </div>
              </div>
              <a href="https://internship-five.vercel.app/" target="_blank">
                <div className="bg-primary rounded-full font-eb text-4xl font-bol text-tertiary text-center px-2 py-2 mt-6">
                  Visit the site
                </div>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <InternScene />
    </motion.div>
  );
};

export default Intern;
