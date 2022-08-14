import { FC } from "react";
import { motion } from "framer-motion";

const Marquee: FC = () => {
  return (
    <div className="flex justify-start items-center lg:gap-x-12 gap-x-6 w-max">
      {Array.from(Array(15).keys()).map((i) => {
        return (
          <motion.span
            initial={{
              x: "0%",
            }}
            animate={{
              x: "-100%",
              transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
              },
            }}
            key={i}
            className="inline-block my-4 text-tertiary text-opacity-50 shadow-lg text-lg md:text-2xl w-max whitespace-nowrap"
          >
            My latest blog
          </motion.span>
        );
      })}
    </div>
  );
};

export default Marquee;
