import Link from "next/link";
import { type FC } from "react";

interface Props {
  back?: boolean;
}

const ReturnNavbar: FC<Props> = ({ back }) => {
  return (
    <nav className="fixed top-0 z-50 flex h-10 w-full justify-between border-b-2 border-tertiary bg-dark px-6 py-2 text-sm text-white md:h-12 md:text-lg">
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
