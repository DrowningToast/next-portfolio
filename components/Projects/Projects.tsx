import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Suspense, useState } from "react";
import Intern from "./Intern/Intern";
import LittlePatient from "./LittlePatient/LittlePatient";

const Projects: React.FC = () => {
  const [isAnimating, setAnimating] = useState<"LP" | "Intern" | null>(null);
  const [selected, setSelected] = useState<"LP" | "Intern" | null>(null);

  return (
    <section className="h-screen w-full px-28 py-20 flex justify-between items-center gap-x-48 z-20 relative">
      <MotionConfig
        transition={{
          duration: 0.75,
        }}
      >
        <div className="w-full h-full">
          <LittlePatient
            setAnimating={setAnimating}
            setSelected={setSelected}
            selected={selected}
            isAnimating={isAnimating}
          />
        </div>
        <div className="w-full h-full">
          <Intern
            setAnimating={setAnimating}
            setSelected={setSelected}
            selected={selected}
            animating={isAnimating}
          />
        </div>
      </MotionConfig>
    </section>
  );
};

export default Projects;
