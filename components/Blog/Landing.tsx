import Link from "next/link";
import { FC } from "react";
import Marquee from "./components/Marquee";

const LandingBlog: FC = () => {
  return (
    <>
      <section className="w-full h-screen grid grid-cols-1 grid-rows-3 place-items-center">
        <div className="bg-custom-radical-gradient w-full h-full row-start-2 flex flex-col items-center justify-start">
          {/* Top marquee */}
          <div className="relative w-full h-1/10 flex justify-start items-center lg:gap-x-80 gap-x-16 overflow-hidden transform -translate-y-full">
            <Marquee />
            <Marquee />
          </div>
          <div className="h-full w-full flex flex-col justify-center gap-y-2 items-center">
            <h1 className="text-white md:text-2xl text-lg">I write blogs</h1>
            <Link href="/blogs" target="_blank" rel="noreferrer" passHref>
              <div className="relative rounded-full backdrop-blur-lg px-8 py-4 cursor-pointer">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl text-black font-bold inline-block rounded-full z-10"
                >
                  Check them out
                </a>
                <div className="absolute inset-0 bg-tertiary opacity-30 rounded-full"></div>
              </div>
            </Link>
          </div>
          <div className="relative w-full h-1/10 flex justify-start items-center lg:gap-x-80 gap-x-16 overflow-hidden transform translate-y-full">
            <Marquee />
            <Marquee />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingBlog;
