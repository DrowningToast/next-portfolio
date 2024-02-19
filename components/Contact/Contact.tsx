const ReactTypingEffect = dynamic(() => import("react-typing-effect"), {
  ssr: false,
});
const ContactScene = dynamic(() => import("@components/r3f/Scenes/Contact"), {
  ssr: false,
});
import { useRef, useState } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import dynamic from "next/dynamic";

const Contact = () => {
  const [selected, setSelected] = useState<null | string>(null);

  const target = useRef<HTMLDivElement>(null);
  const inView = useInView(target, {
    once: true,
    margin: "360px 0px",
  });

  return (
    <section
      ref={target}
      className="relative z-20 flex h-svh w-full flex-col items-center justify-start px-4 pb-0 pt-10 text-white lg:flex-row lg:px-12 lg:py-20"
    >
      <div className="absolute inset-0 flex flex-row-reverse">
        <div className="relative flex size-full flex-col-reverse lg:w-1/2">
          <div className="flex h-1/6 w-full items-center justify-center gap-x-24 text-xl underline underline-offset-2 lg:h-1/2">
            <Link
              onMouseEnter={() => setSelected("github")}
              onMouseLeave={() => setSelected(null)}
              className="z-30"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/DrowningToast">
              Github
            </Link>
            <Link
              onMouseEnter={() => setSelected("linkedin")}
              onMouseLeave={() => setSelected(null)}
              className="z-30"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/supratouch-suwatno-7a8608232/">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <div className="flex h-1/2 w-full flex-col items-start justify-center gap-y-2 px-16 lg:h-full lg:w-1/2 lg:pl-0 lg:pr-12">
        <h2 className="font-eb text-4xl font-semibold uppercase text-white">
          I make
        </h2>
        <h1 className="self-center text-5xl font-bold uppercase text-primary md:text-6xl xl:text-8xl">
          {ReactTypingEffect && (
            <ReactTypingEffect
              text={words.map((word) => {
                return word.toUpperCase();
              })}
              className="font-eb"
              cursor=" "
              speed={200}
              eraseDelay={3000}
              eraseSpeed={250}
              typingDelay={50}
            />
          )}
        </h1>
        <h2 className="font-eb self-end text-4xl font-semibold uppercase text-white">
          Websites
        </h2>
      </div>
      <div className="relative h-1/2 w-full lg:h-full lg:w-1/2">
        {inView && ContactScene && <ContactScene selected={selected} />}
      </div>
    </section>
  );
};

export default Contact;

const words = [
  "Amazing",
  "Astounding",
  "Awesome",
  "Breathtaking",
  "Stunning",
  "Incredible",
  "Mind-Blowing",
  "Spectacular",
  "Remarkable",
];
