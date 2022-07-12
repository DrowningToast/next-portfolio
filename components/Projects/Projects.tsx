import { motion, MotionConfig } from "framer-motion";
import { Suspense, useState } from "react";
import Intern from "./Intern/Intern";
import LittlePatient from "./LittlePatient/LittlePatient";

const Projects: React.FC = () => {
  const [isAnimating, setAnimating] = useState<"LP" | "Intern" | null>(null);
  const [selected, setSelected] = useState<"LP" | "Intern" | null>(null);

  return (
    <section
      id="projects"
      className="h-screen w-full lg:px-28 md:px-16 px-6 lg:py-20 md:py-14 py-7 flex lg:flex-row flex-col lg:gap-y-0 md:gap-y-28 gap-y-16 justify-between items-center xl:gap-x-48 gap-x-24 z-20 relative"
    >
      <MotionConfig
        transition={{
          duration: 0.75,
        }}
      >
        <a href="#projects" className="inline-block w-full h-full">
          {process.browser && (
            <Suspense fallback={null}>
              <motion.div layout className="w-full h-full ">
                <LittlePatient
                  setAnimating={setAnimating}
                  setSelected={setSelected}
                  selected={selected}
                  isAnimating={isAnimating}
                />
              </motion.div>
            </Suspense>
          )}
        </a>

        <a href="#projects" className="inline-block w-full h-full">
          {process.browser && (
            <motion.div layout className="w-full h-full">
              <Suspense fallback={null}>
                <Intern
                  setAnimating={setAnimating}
                  setSelected={setSelected}
                  selected={selected}
                  animating={isAnimating}
                />
              </Suspense>
            </motion.div>
          )}
        </a>
      </MotionConfig>
    </section>
  );
};

export default Projects;
