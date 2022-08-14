import { FC } from "react";
import Marquee from "./components/Marquee";

const LandingBlog: FC = () => {
  return (
    <>
      <section className="w-full h-screen grid grid-cols-1 grid-rows-3 place-items-center">
        <div className="bg-red-300 w-full h-full row-start-2 flex flex-col items-center justify-start">
          <div className="relative w-full h-1/10 flex justify-start items-center lg:gap-x-80 gap-x-16 overflow-hidden transform -translate-y-full">
            <Marquee />
            <Marquee />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingBlog;
