import { type FC, useState } from "react";
import { motion } from "framer-motion";
import useCMSpath from "@components/utils/useCMSpath";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  backgroundURL: string;
  slug: string;
}

const Card: FC<Props> = ({ title, backgroundURL, slug }) => {
  // const [showDescription, setDescription] = useState(false);
  const cmsPath = useCMSpath();

  return (
    <Link prefetch
      href={`/blogs/${slug}`}
      hrefLang="th"
      target={"_blank"}
      rel="noreferrer"
    >
      <div className="relative min-h-[190px] w-80 cursor-pointer md:aspect-video md:w-96 lg:w-[460px] xl:w-[560px]">
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
          className="absolute inset-0 rounded-lg border-[4px] border-white"
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
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg border-white bg-cover  bg-center bg-no-repeat"
        >
          <span className="absolute left-2 top-2 rounded-lg bg-white px-2 py-1 font-mono text-sm font-extrabold uppercase text-primary md:left-4 md:top-4 md:text-base">
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
            className={`absolute bottom-0 
                block w-full bg-white px-2 py-1 shadow-2xl`}
          >
            <header className="py-0.5 font-sans font-semibold md:text-lg lg:text-xl">
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
    </Link>
  );
};

export default Card;
