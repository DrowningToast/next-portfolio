import ReactTypingEffect from "react-typing-effect";
import ContactScene from "@components/r3f/Scenes/Contact";
import { Suspense, useState } from "react";
import Link from "next/link";

const Contact = () => {
  const [selected, setSelected] = useState<null | string>(null);

  return (
    <section className="h-screen text-white w-full px-12 py-20 flex justify-start items-center z-20 relative">
      <div className="absolute inset-0 flex flex-row-reverse">
        <div className="w-1/2 h-full relative flex flex-col-reverse">
          <div className="w-full h-1/2 flex justify-center gap-x-24 items-center text-xl underline underline-offset-2">
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
      <div className="w-1/2 h-full flex flex-col justify-center items-start gap-y-2 pr-12">
        <h2 className="text-4xl font-semibold text-white font-eb uppercase">
          I make
        </h2>
        <h1 className="uppercase font-bold text-8xl text-primary self-center">
          <ReactTypingEffect
            text={words.map((word) => {
              return word.toUpperCase();
            })}
            className="font-eb"
            cursor=" "
          />
        </h1>
        <h2 className="text-4xl font-semibold text-white font-eb uppercase self-end">
          Website
        </h2>
      </div>
      <div className="w-1/2 h-full relative">
        <ContactScene selected={selected} />
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
