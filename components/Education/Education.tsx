import Link from "next/link";

const Education = () => {
  return (
    <section className="h-screen flex flex-col justify-around items-start px-24 py-16 text-tertiary w-max">
      <div className="flex flex-col justify-center items-start  z-20">
        <h3 className="font-eb text-2xl">Graduated Highschool</h3>
        <h2 className="font-eb font-semibold text-4xl self-center">
          Prasarnmit Demonstration School (Secondary)
        </h2>
        <h3 className="text-secondary text-xl font-helvetica self-end font-bold">
          Information Technology Major
        </h3>
      </div>
      <div className="flex flex-col justify-center items-start  z-20">
        <h3 className="font-eb text-2xl">Studying for a bachelor science</h3>
        <h2 className="font-eb font-semibold text-4xl self-center">
          King Mongkut's Institute of Technology Ladkrabang
        </h2>
        <h3 className="text-primary text-xl font-helvetica self-end font-bold">
          Information Technology Major
        </h3>
      </div>
      <div className="flex flex-col justify-center items-start  z-20">
        <h3 className="font-eb text-2xl">Interned for 385 hours </h3>
        <h2 className="font-eb font-semibold text-4xl self-center">
          Siriraj Informatics and Data Innovation Center
        </h2>
        <h3 className="text-secondary text-xl font-helvetica self-end font-bold">
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
