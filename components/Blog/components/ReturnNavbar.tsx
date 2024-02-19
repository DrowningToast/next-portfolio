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
          <h1 className="cursor-pointer">{"<- Back to the landing page"}</h1>
        </Link>
      ) : (
        <Link href={"/blogs"} passHref>
          <h1 className="cursor-pointer">{"<- back"}</h1>
        </Link>
      )}
    </nav>
  );
};

export default ReturnNavbar;
