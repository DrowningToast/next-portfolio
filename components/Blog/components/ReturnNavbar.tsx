import Link from "next/link";
import { FC } from "react";

interface Props {
  back?: boolean;
}

const ReturnNavbar: FC<Props> = ({ back }) => {
  return (
    <nav className="w-full md:h-12 h-10 bg-dark z-50 text-white py-2 px-6 border-b-2 border-tertiary fixed top-0 text-sm md:text-lg flex justify-between">
      {!back ? (
        <Link href="https://supratouch.dev" passHref>
          <a>
            <h1 className="cursor-pointer">{"<- Back to the landing page"}</h1>
          </a>
        </Link>
      ) : (
        <Link href={"/blogs"} passHref>
          <h1 className="cursor-pointer">{"<- back"}</h1>
        </Link>
      )}
      {/* <Link href="https://medium.com/@drowningtoast">
        <a
          href="https://medium.com/@drowningtoast"
          target="_blank" rel="noreferrer"
          rel="noopener noreferrer"
          className="text-white underline cursor-pointer"
        >
          Medium
        </a>
      </Link> */}
    </nav>
  );
};

export default ReturnNavbar;
