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
      className="h-screen text-white w-full lg:px-12 px-4 lg:py-20 pt-10 pb-0 flex justify-start lg:flex-row flex-col items-center z-20 relative"
    >
      <div className="absolute inset-0 flex flex-row-reverse">
        <div className="lg:w-1/2 w-full h-full relative flex flex-col-reverse">
          <div className="w-full lg:h-1/2 h-1/6 flex justify-center gap-x-24 items-center text-xl underline underline-offset-2">
            <Link href="https://github.com/DrowningToast">
              <a
                onMouseEnter={() => setSelected("github")}
                onMouseLeave={() => setSelected(null)}
                className="z-30"
                target="_blank"
              >
                Github
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/supratouch-suwatno-7a8608232/">
              <a
                onMouseEnter={() => setSelected("linkedin")}
                onMouseLeave={() => setSelected(null)}
                className="z-30"
                target="_blank"
              >
                LinkedIn
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex flex-col justify-center items-start gap-y-2 lg:pr-12 lg:pl-0 px-16">
        <h2 className="text-4xl font-semibold text-white font-eb uppercase">
          I make
        </h2>
        <h1 className="uppercase font-bold xl:text-8xl md:text-6xl text-5xl text-primary self-center">
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
        <h2 className="text-4xl font-semibold text-white font-eb uppercase self-end">
          Websites
        </h2>
      </div>
      <div className="lg:w-1/2 w-full lg:h-full h-1/2 relative">
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
