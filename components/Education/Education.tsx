import Link from "next/link";

const Education = () => {
  return (
    <section className="h-screen flex flex-col justify-around lg:items-start items-center lg:px-24 md:px-14 px-6 py-16 text-tertiary lg:w-max w-full">
      <div className="flex flex-col justify-center items-start  z-20">
        <h3 className="font-eb lg:text-2xl text-xl">Graduated Highschool</h3>
        <h2 className="font-eb font-semibold lg:text-4xl md:text-3xl self-center">
          Prasarnmit Demonstration School (Secondary)
        </h2>
        <h3 className="text-primary md:text-xl text-lg font-helvetica self-end font-bold">
          Information Technology Major
        </h3>
      </div>
      <div className="flex flex-col justify-center items-start  z-20">
        <h3 className="font-eb lg:text-2xl text-xl">
          Studying for a bachelor science
        </h3>
        <h2 className="font-eb font-semibold lg:text-4xl md:text-3xl text-sm self-center">
          King Mongkut's Institute of Technology Ladkrabang
        </h2>
        <h3 className="text-primary md:text-xl text-lg font-helvetica self-end font-bold">
          Information Technology Major
        </h3>
      </div>
      <div className="flex flex-col justify-center items-start  z-20">
        <h3 className="font-eb lg:text-2xl text-xl">Interned for 385 hours </h3>
        <h2 className="font-eb font-semibold lg:text-4xl md:text-3xl self-center">
          Siriraj Informatics and Data Innovation Center
        </h2>
        <h3 className="text-primary md:text-xl text-lg font-helvetica self-end font-bold">
          Health Informic (Frontend)
        </h3>
        <Link href="https://satitcom.spsm.ac.th/internship/2021/supratouch-suwatno">
          <a
            target="_blank"
            className="text-secondary underline text-sm self-end"
          >
            View more
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Education;
