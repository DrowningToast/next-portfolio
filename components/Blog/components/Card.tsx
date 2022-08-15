import { FC, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  backgroundURL: string;
  articleURL: string;
}

const Card: FC<Props> = ({ title, description, backgroundURL }) => {
  const [showDescription, setDescription] = useState(false);

  return (
    <div className="w-80 min-h-[190px] relative">
      <motion.div
        animate={{
          x: "2%",
          y: "-5%",
        }}
        className="absolute inset-0 border-[4px] border-white rounded-lg"
      ></motion.div>
      <motion.div
        animate={{
          x: "-2%",
          y: "5%",
        }}
        className="bg-blue-200 overflow-hidden absolute inset-0  border-white rounded-lg"
      >
        <span className="uppercase text-sm font-bold text-primary font-mono top-2 left-2 absolute">
          Event
        </span>
        <motion.article
          layout
          animate={{
            y: "100%",
            bottom: "40px",
          }}
          whileHover={{
            y: "0%",
            bottom: 0,
            top: 0,
            transition: {
              type: "tween",
            },
          }}
          className={`absolute transform 
          block w-full bg-white pt-2 pb-12 px-2`}
        >
          <header className="font-sans font-semibold py-0.5">
            Placeholder Article Title goes here
          </header>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ullam
            minus delectus blanditiis! Ut, cum ipsa eligendi architecto nobis
            quasi, unde autem, illum asperiores natus itaque? Aliquam ex velit
            temporibus!
          </p>
        </motion.article>
      </motion.div>
    </div>
  );
};

export default Card;
