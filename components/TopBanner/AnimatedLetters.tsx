import { motion, type Transition } from "framer-motion";
import React from "react";

interface Props {
  title: string | any;
  disabled?: boolean;
  windUp?: number;
}

const AnimatedLetters: React.FC<Props> = ({ title, disabled, windUp }) => {
  const letterAni = {
    hidden: { y: 400 },
    visible: {
      y: 0,
      transition: {
        delay: windUp,
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

  const container = {
    visible: {
      transition: {
        delayChildren: windUp ?? 2,
        staggerChildren: 0.25,
      } as Transition,
    },
  };

  return (
    <motion.span
      className="nowrap relative inline-block"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {[...title].map((letter, index) => (
        <motion.span
          key={index}
          className="nowrap relative inline-block"
          variants={letterAni}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;
