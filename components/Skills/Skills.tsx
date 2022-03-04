import { motion } from "framer-motion";
import React from "react";

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
  return (
    <section className="h-screen w-full flex flex-col gap-y-16 justify-start items-center py-10 ">
      <h1 className="font-eb text-9xl text-white font-bold z-20">I can</h1>
      <div className="flex flex-col justify-center items-center gap-y-10 font-eb z-20 overflow-hidden max-w-full">
        <div className="flex justify-start items-center gap-x-80 overflow-hidden max-w-full">
          <motion.div
            animate={{
              translateX: ["0%", "-100%"],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex justify-start items-center gap-x-80 max-w-full"
          >
            {row1.map((element, i) => {
              return (
                <span
                  key={i}
                  className={`${
                    !element.highlighted
                      ? "text-tertiary text-4xl"
                      : "text-primary text-6xl"
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
                      ? "text-tertiary text-4xl"
                      : "text-primary text-6xl"
                  } font-semibold text-4xl w-max whitespace-nowrap`}
                >
                  {element.value}
                </span>
              );
            })}
          </motion.div>
        </div>
        <div className="flex justify-start items-center gap-x-80 overflow-hidden max-w-full">
          <motion.div
            animate={{
              translateX: ["0%", "-100%"],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex justify-start items-center gap-x-80 max-w-full"
          >
            {row2.map((element, i) => {
              return (
                <span
                  key={i}
                  className={`${
                    !element.highlighted
                      ? "text-tertiary text-4xl"
                      : "text-primary text-6xl"
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
                      ? "text-tertiary text-4xl"
                      : "text-primary text-6xl"
                  } font-semibold text-4xl w-max whitespace-nowrap`}
                >
                  {element.value}
                </span>
              );
            })}
          </motion.div>
        </div>
        <div className="flex justify-start items-center gap-x-80 overflow-hidden max-w-full">
          <motion.div
            animate={{
              translateX: ["0%", "-100%"],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex justify-start items-center gap-x-80 max-w-full"
          >
            {row3.map((element, i) => {
              return (
                <span
                  key={i}
                  className={`${
                    !element.highlighted
                      ? "text-tertiary text-4xl"
                      : "text-primary text-6xl"
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
                      ? "text-tertiary text-4xl"
                      : "text-primary text-6xl"
                  } font-semibold text-4xl w-max whitespace-nowrap`}
                >
                  {element.value}
                </span>
              );
            })}
          </motion.div>
        </div>
        <div className="flex justify-start items-center gap-x-80 overflow-hidden max-w-full">
          <motion.div
            animate={{
              translateX: ["0%", "-100%"],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex justify-start items-center gap-x-80 max-w-full"
          >
            {row4.map((element, i) => {
              return (
                <span
                  key={i}
                  className={`${
                    !element.highlighted
                      ? "text-tertiary text-4xl"
                      : "text-primary text-6xl"
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
                      ? "text-tertiary text-4xl"
                      : "text-primary text-6xl"
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