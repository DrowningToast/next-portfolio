import Link from "next/link";
import { type FC } from "react";
import Marquee from "./components/Marquee";

const LandingBlog: FC = () => {
  return (
    <>
      <section className="grid h-svh w-full grid-cols-1 grid-rows-3 place-items-center">
        <div className="row-start-2 flex size-full flex-col items-center justify-start bg-custom-radical-gradient">
          {/* Top marquee */}
          <div className="h-1/10 relative flex w-full -translate-y-full items-center justify-start gap-x-16 overflow-hidden lg:gap-x-80">
            <Marquee />
            <Marquee />
          </div>
          <div className="flex size-full flex-col items-center justify-center gap-y-2">
            <h1 className="text-lg text-white md:text-2xl">I write blogs</h1>
            <Link href="/blogs" target="_blank" rel="noreferrer" passHref>
              <div className="relative cursor-pointer rounded-full px-8 py-4 backdrop-blur-lg">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="z-10 inline-block rounded-full text-2xl font-bold text-black"
                >
                  Check them out
                </a>
                <div className="absolute inset-0 rounded-full bg-tertiary opacity-30"></div>
              </div>
            </Link>
          </div>
          <div className="h-1/10 relative flex w-full translate-y-full items-center justify-start gap-x-16 overflow-hidden lg:gap-x-80">
            <Marquee />
            <Marquee />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingBlog;
