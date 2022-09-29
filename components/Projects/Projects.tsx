import { AnimatePresence, motion, useInView } from "framer-motion";
import { useState, FC, ReactElement, useRef } from "react";
import Intern from "./Intern/Intern";
import LittlePatient from "./LittlePatient/LittlePatient";

interface Project {
  name: string;
  component: ReactElement | null;
}

const Projects: FC = () => {
  const [selected, setSelected] = useState<string>("Little-Patient");

  const target = useRef<HTMLDivElement>(null);
  const initializeCanvas = useInView(target, {
    margin: "640px 0px",
    once: true,
  });

  const names: Project[] = [
    {
      name: "Little-Patient",
      component: <LittlePatient />,
    },
    { name: "Internship 2021", component: <Intern /> },
  ];

  return (
    <div
      ref={target}
      className="min-h-screen w-full flex flex-col px-8 py-8 flex-grow gap-y-4"
    >
      <motion.nav
        layout
        className="text-primary text-x; md:text-3xl font-semibold flex justify-start items-center gap-x-12 md:ml-8"
      >
        {names.map((name, index) => {
          return (
            <motion.div
              key={`project-${index}`}
              onClick={() => setSelected(name.name)}
              layout
              className="cursor-pointer"
            >
              <motion.h5 layout>{name.name}</motion.h5>
              {selected === name.name && (
                <motion.div
                  layout
                  layoutId="underline"
                  className="w-full h-0.5 rounded-full bg-primary mt-0.5"
                ></motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.nav>
      <div className="w-full h-screen relative">
        <AnimatePresence exitBeforeEnter>
          {initializeCanvas &&
            names.filter((project) => {
              return project.name === selected;
            })[0]?.component}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
