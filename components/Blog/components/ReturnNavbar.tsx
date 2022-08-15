import { FC } from "react";

const ReturnNavbar: FC = () => {
  return (
    <nav className="w-full md:h-12 h-10 text-white py-2 px-6 border-b-2 border-tertiary fixed top-0 text-sm md:text-lg">
      {"<- Back to the landing page"}
    </nav>
  );
};

export default ReturnNavbar;
