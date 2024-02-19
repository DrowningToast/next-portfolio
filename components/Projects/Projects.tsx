import { AnimatePresence, motion, useInView } from "framer-motion";
import { useState, type FC, type ReactElement, useRef } from "react";
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
      className="flex min-h-svh w-full grow flex-col gap-y-4 p-8"
    >
      <motion.nav
        layout
        className="text-x; flex items-center justify-start gap-x-12 font-semibold text-primary md:ml-8 md:text-3xl"
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
                  className="mt-0.5 h-0.5 w-full rounded-full bg-primary"
                ></motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.nav>
      <div className="relative h-svh w-full">
        <AnimatePresence mode="wait">
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
