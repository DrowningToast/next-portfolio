import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState, FC, JSXElementConstructor, ReactElement } from "react";
import Intern from "./Intern/Intern";
import LittlePatient from "./LittlePatient/LittlePatient";

// const Projects: FC = () => {
//   const [isAnimating, setAnimating] = useState<"LP" | "Intern" | null>(null);
//   const [selected, setSelected] = useState<"LP" | "Intern" | null>(null);

//   return (
//     <section
//       id="projects"
//       className="h-screen w-full lg:px-28 md:px-16 px-6 lg:py-20 md:py-14 py-7 flex lg:flex-row flex-col lg:gap-y-0 md:gap-y-28 gap-y-16 justify-between items-center xl:gap-x-48 gap-x-24 z-20 relative"
//     >
//       <MotionConfig
//         transition={{
//           duration: 0.75,
//         }}
//       >
//         <a href="#projects" className="inline-block w-full h-full">
//           {process.browser && (
//             <motion.div layout className="w-full h-full ">
//               <LittlePatient
//                 setAnimating={setAnimating}
//                 setSelected={setSelected}
//                 selected={selected}
//                 isAnimating={isAnimating}
//               />
//             </motion.div>
//           )}
//         </a>

//         <a href="#projects" className="inline-block w-full h-full">
//           {process.browser && (
//             <motion.div layout className="w-full h-full">
//               <Intern
//                 setAnimating={setAnimating}
//                 setSelected={setSelected}
//                 selected={selected}
//                 animating={isAnimating}
//               />
//             </motion.div>
//           )}
//         </a>
//       </MotionConfig>
//     </section>
//   );
// };

interface Project {
  name: string;
  component: ReactElement | null;
}

const Projects: FC = () => {
  const [selected, setSelected] = useState<string>("Little-Patient");

  const names: Project[] = [
    {
      name: "Little-Patient",
      component: <LittlePatient selected={selected} />,
    },
    { name: "Internship 2021", component: null },
  ];

  return (
    <div className="min-h-screen max-h-screen w-full flex flex-col px-8 py-8 flex-grow gap-y-4">
      <motion.nav
        layout
        className="text-primary text-x; md:text-3xl font-semibold flex justify-start items-center gap-x-12 md:ml-8"
      >
        {names.map((name, index) => {
          return (
            <motion.div
              key={index}
              onClick={() => setSelected(name.name)}
              layout
            >
              <motion.h5>{name.name}</motion.h5>
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
          {
            names.filter((project) => {
              return project.name === selected;
            })[0]?.component
          }
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
