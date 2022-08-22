import { FC, useState } from "react";
import { motion } from "framer-motion";
import useCMSpath from "@components/utils/useCMSpath";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  backgroundURL: string;
  slug: string;
}

const Card: FC<Props> = ({ title, description, backgroundURL, slug }) => {
  const [showDescription, setDescription] = useState(false);
  const cmsPath = useCMSpath();

  return (
    <Link href={`/blogs/${slug}`} prefetch>
      <a hrefLang="th" target={"_blank"} href={`/blogs/${slug}`}>
        <div className="xl:w-[560px] lg:w-[460px] md:w-96 w-80 md:aspect-video min-h-[190px] relative cursor-pointer">
          <motion.div
            animate={{
              x: "2%",
              y: "-5%",
            }}
            whileHover={{
              x: "0%",
              y: "0%",
              transition: {
                type: "linear",
              },
            }}
            className="absolute inset-0 border-[4px] border-white rounded-lg"
          ></motion.div>
          <motion.div
            style={{
              backgroundImage: `url(${cmsPath}${backgroundURL})`,
            }}
            // animate={{
            //   x: "-2%",
            //   y: "5%",
            // }}
            // whileHover={{
            //   x: "0%",
            //   y: "0%",
            // }}
            className="pointer-events-none bg-cover bg-center bg-no-repeat overflow-hidden absolute inset-0  border-white rounded-lg"
          >
            <span className="uppercase bg-white px-2 py-1 rounded-lg md:text-base text-sm font-extrabold text-primary font-mono md:top-4 md:left-4 top-2 left-2 absolute">
              Event
            </span>
            <motion.article
              layout
              // animate={{
              //   y: "100%",
              //   bottom: "40px",
              // }}
              // whileHover={{
              //   y: "0%",
              //   bottom: 0,
              //   top: 0,
              //   transition: {
              //     type: "tween",
              //   },
              // }}
              className={`absolute transform 
                block w-full bg-white px-2 py-1 bottom-0 shadow-2xl`}
            >
              <header className="font-sans lg:text-xl md:text-lg font-semibold py-0.5">
                {title ??
                  `
                    Placeholder Title
                    `}
              </header>
              {/* <p className="text-sm">
                  {description ??
                    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ullam
                  minus delectus blanditiis! Ut, cum ipsa eligendi architecto nobis
                  quasi, unde autem, illum asperiores natus itaque? Aliquam ex velit
                  temporibus!`}
                </p> */}
            </motion.article>
          </motion.div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
