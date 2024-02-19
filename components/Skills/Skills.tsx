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
  {
    value: "GraphQL"
  },
  {
    value: "SvelteKit",
    highlighted: true
  }
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
  {
    value: "PostgreSQL"
  }
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
  {
    value: "Docker"
  }
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
  {
    value: "tRPC"
  }
];

const Skills: React.FC = () => {
  const [width] = useWindowSize();
  const isMobile = useMemo(() => {
    return width < 1024;
  }, [width]);

  return (
    <section className="flex h-svh w-full flex-col items-center justify-start gap-y-16 py-10 ">
      <h1 className="font-eb z-20 text-5xl font-bold text-white md:text-9xl">
        I can
      </h1>
      <div className="font-eb z-20 flex max-w-full flex-col items-center justify-center gap-y-20 overflow-hidden lg:gap-y-10">
        <div className="flex max-w-full items-center justify-start gap-x-16 overflow-hidden lg:gap-x-80">
          <motion.div
            animate={{
              translateX: ["0%", "-100%"],
              transition: {
                duration: !isMobile ? 20 : 12,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex max-w-full items-center justify-start gap-x-16 lg:gap-x-80"
          >
            {row1.map((element, i) => {
              return (
                <span
                  key={i}
                  className={`${!element.highlighted
                    ? "text-2xl text-tertiary md:text-4xl"
                    : "text-4xl text-primary md:text-6xl"
                    } w-max whitespace-nowrap text-4xl font-semibold`}
                >
                  {element.value}
                </span>
              );
            })}
            {row1.map((element, i) => {
              return (
                <span
                  key={i * -1}
                  className={`${!element.highlighted
                    ? "text-2xl text-tertiary md:text-4xl"
                    : "text-4xl text-primary md:text-6xl"
                    } w-max whitespace-nowrap text-4xl font-semibold`}
                >
                  {element.value}
                </span>
              );
            })}
          </motion.div>
        </div>
        <div className="flex max-w-full items-center justify-start gap-x-16 overflow-hidden lg:gap-x-80">
          <motion.div
            animate={{
              translateX: ["0%", "-100%"],
              transition: {
                duration: !isMobile ? 20 : 10,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex max-w-full items-center justify-start gap-x-16 lg:gap-x-80"
          >
            {row2.map((element, i) => {
              return (
                <span
                  key={i}
                  className={`${!element.highlighted
                    ? "text-2xl text-tertiary md:text-4xl"
                    : "text-4xl text-primary md:text-6xl"
                    } w-max whitespace-nowrap text-4xl font-semibold`}
                >
                  {element.value}
                </span>
              );
            })}
            {row2.map((element, i) => {
              return (
                <span
                  key={i * -1}
                  className={`${!element.highlighted
                    ? "text-2xl text-tertiary md:text-4xl"
                    : "text-4xl text-primary md:text-6xl"
                    } w-max whitespace-nowrap text-4xl font-semibold`}
                >
                  {element.value}
                </span>
              );
            })}
          </motion.div>
        </div>
        <div className="flex max-w-full items-center justify-start gap-x-16 overflow-hidden lg:gap-x-80">
          <motion.div
            animate={{
              translateX: ["0%", "-100%"],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex max-w-full items-center justify-start gap-x-16 lg:gap-x-80"
          >
            {row3.map((element, i) => {
              return (
                <span
                  key={i}
                  className={`${!element.highlighted
                    ? "text-2xl text-tertiary md:text-4xl"
                    : "text-4xl text-primary md:text-6xl"
                    } w-max whitespace-nowrap text-4xl font-semibold`}
                >
                  {element.value}
                </span>
              );
            })}
            {row3.map((element, i) => {
              return (
                <span
                  key={i * -1}
                  className={`${!element.highlighted
                    ? "text-2xl text-tertiary md:text-4xl"
                    : "text-4xl text-primary md:text-6xl"
                    } w-max whitespace-nowrap text-4xl font-semibold`}
                >
                  {element.value}
                </span>
              );
            })}
          </motion.div>
        </div>
        <div className="flex max-w-full items-center justify-start gap-x-16 overflow-hidden lg:gap-x-80">
          <motion.div
            animate={{
              translateX: ["0%", "-100%"],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex max-w-full items-center justify-start gap-x-16 lg:gap-x-80"
          >
            {row4.map((element, i) => {
              return (
                <span
                  key={i}
                  className={`${!element.highlighted
                    ? "text-2xl text-tertiary md:text-4xl"
                    : "text-4xl text-primary md:text-6xl"
                    } w-max whitespace-nowrap text-4xl font-semibold`}
                >
                  {element.value}
                </span>
              );
            })}
            {row4.map((element, i) => {
              return (
                <span
                  key={i * -1}
                  className={`${!element.highlighted
                    ? "text-2xl text-tertiary md:text-4xl"
                    : "text-4xl text-primary md:text-6xl"
                    } w-max whitespace-nowrap text-4xl font-semibold`}
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
