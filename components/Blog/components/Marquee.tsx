import { type FC } from "react";
import { motion } from "framer-motion";

const Marquee: FC = () => {
  return (
    <div className="flex w-max items-center justify-start gap-x-6 lg:gap-x-12">
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
            className="my-4 inline-block w-max whitespace-nowrap text-lg text-tertiary text-opacity-50 shadow-lg md:text-2xl"
          >
            My latest blog
          </motion.span>
        );
      })}
    </div>
  );
};

export default Marquee;
