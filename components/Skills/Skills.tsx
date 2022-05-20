import useWindowSize from "@components/hooks/useWindowSize";
import { motion } from "framer-motion";
import React, { useMemo } from "react";

const row1 = [
  {
    value: "Framer Motion",
  },
  {
    value: "React",
    highlighted: true,
  },
  {
    value: "Firebase",
  },
  {
    value: "Python",
  },
  {
    value: "Java",
  },
];
const row2 = [
  {
    value: "three js",
  },
  {
    value: "C++",
  },
  {
    value: "Javascript",
    highlighted: true,
  },
  {
    value: "CSS",
  },
  {
    value: "Tailwind",
  },
];
const row3 = [
  {
    value: "HTML5",
  },
  {
    value: "Node js",
  },
  {
    value: "Typescript",
  },
  {
    value: "Next js",
    highlighted: true,
  },
  {
    value: "C#",
  },
];
const row4 = [
  {
    value: "MongoDB",
  },
  {
    value: "Vue",
  },
  {
    value: "Unity 2D",
  },
  {
    value: "Figma",
  },
  {
    value: "Express",
    highlighted: true,
  },
];

const Skills: React.FC = () => {
  const [width] = useWindowSize();
  const isMobile = useMemo(() => {
    return width < 1024;
  }, [width]);

  return (
    <section className="h-screen w-full flex flex-col gap-y-16 justify-start items-center py-10 ">
      <h1 className="font-eb md:text-9xl text-5xl text-white font-bold z-20">
        I can
      </h1>
      <div className="flex flex-col justify-center items-center lg:gap-y-10 gap-y-20 font-eb z-20 overflow-hidden max-w-full">
        <div className="flex justify-start items-center lg:gap-x-80 gap-x-16 overflow-hidden max-w-full">
          <motion.div
            animate={{
              translateX: ["0%", "-100%"],
              transition: {
                duration: !isMobile ? 20 : 12,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex justify-start items-center lg:gap-x-80 gap-x-16 max-w-full"
          >
            {row1.map((element, i) => {
              return (
                <span
                  key={i}
                  className={`${
                    !element.highlighted
                      ? "text-tertiary md:text-4xl text-2xl"
                      : "text-primary md:text-6xl text-4xl"
                  } font-semibold text-4xl w-max whitespace-nowrap`}
                >
                  {element.value}
                </span>
              );
            })}
            {row1.map((element, i) => {
              return (
                <span
                  key={i * -1}
                  className={`${
                    !element.highlighted
                      ? "text-tertiary md:text-4xl text-2xl"
                      : "text-primary md:text-6xl text-4xl"
                  } font-semibold text-4xl w-max whitespace-nowrap`}
                >
                  {element.value}
                </span>
              );
            })}
          </motion.div>
        </div>
        <div className="flex justify-start items-center lg:gap-x-80 gap-x-16 overflow-hidden max-w-full">
          <motion.div
            animate={{
              translateX: ["0%", "-100%"],
              transition: {
                duration: !isMobile ? 20 : 10,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex justify-start items-center lg:gap-x-80 gap-x-16 max-w-full"
          >
            {row2.map((element, i) => {
              return (
                <span
                  key={i}
                  className={`${
                    !element.highlighted
                      ? "text-tertiary md:text-4xl text-2xl"
                      : "text-primary md:text-6xl text-4xl"
                  } font-semibold text-4xl w-max whitespace-nowrap`}
                >
                  {element.value}
                </span>
              );
            })}
            {row2.map((element, i) => {
              return (
                <span
                  key={i * -1}
                  className={`${
                    !element.highlighted
                      ? "text-tertiary md:text-4xl text-2xl"
                      : "text-primary md:text-6xl text-4xl"
                  } font-semibold text-4xl w-max whitespace-nowrap`}
                >
                  {element.value}
                </span>
              );
            })}
          </motion.div>
        </div>
        <div className="flex justify-start items-center lg:gap-x-80 gap-x-16 overflow-hidden max-w-full">
          <motion.div
            animate={{
              translateX: ["0%", "-100%"],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex justify-start items-center lg:gap-x-80 gap-x-16 max-w-full"
          >
            {row3.map((element, i) => {
              return (
                <span
                  key={i}
                  className={`${
                    !element.highlighted
                      ? "text-tertiary md:text-4xl text-2xl"
                      : "text-primary md:text-6xl text-4xl"
                  } font-semibold text-4xl w-max whitespace-nowrap`}
                >
                  {element.value}
                </span>
              );
            })}
            {row3.map((element, i) => {
              return (
                <span
                  key={i * -1}
                  className={`${
                    !element.highlighted
                      ? "text-tertiary md:text-4xl text-2xl"
                      : "text-primary md:text-6xl text-4xl"
                  } font-semibold text-4xl w-max whitespace-nowrap`}
                >
                  {element.value}
                </span>
              );
            })}
          </motion.div>
        </div>
        <div className="flex justify-start items-center lg:gap-x-80 gap-x-16 overflow-hidden max-w-full">
          <motion.div
            animate={{
              translateX: ["0%", "-100%"],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex justify-start items-center lg:gap-x-80 gap-x-16 max-w-full"
          >
            {row4.map((element, i) => {
              return (
                <span
                  key={i}
                  className={`${
                    !element.highlighted
                      ? "text-tertiary md:text-4xl text-2xl"
                      : "text-primary md:text-6xl text-4xl"
                  } font-semibold text-4xl w-max whitespace-nowrap`}
                >
                  {element.value}
                </span>
              );
            })}
            {row4.map((element, i) => {
              return (
                <span
                  key={i * -1}
                  className={`${
                    !element.highlighted
                      ? "text-tertiary md:text-4xl text-2xl"
                      : "text-primary md:text-6xl text-4xl"
                  } font-semibold text-4xl w-max whitespace-nowrap`}
                >
                  {element.value}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
