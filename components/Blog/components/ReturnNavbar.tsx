import Link from "next/link";
import { FC } from "react";

const ReturnNavbar: FC = () => {
  return (
    <nav className="w-full md:h-12 h-10 text-white py-2 px-6 border-b-2 border-tertiary fixed top-0 text-sm md:text-lg flex justify-between">
      <h1>{"<- Back to the landing page"}</h1>
      <Link href="https://medium.com/@drowningtoast">
        <a
          href="https://medium.com/@drowningtoast"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline cursor-pointer"
        >
          Medium
        </a>
      </Link>
    </nav>
  );
};

export default ReturnNavbar;
