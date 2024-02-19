import Link from "next/link";

const Resume = () => {
  return (
    <div className="max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl font-sans flex flex-col justify-around gap-y-8 lg:items-start items-center lg:px-24 md:px-14 px-6 py-16 text-tertiary whitespace-break-spaces">
      <div className="space-y-4">
        <h2 className="text-2xl font-eb font-semibold">Get to know me</h2>
        <div className="flex flex-col gap-y-2 ">
          2nd year Information Technology Student (Software Engineering). Currently studying at King Mongkut's Institute of Technology Ladkrabang
        </div>
      </div>
      <div className="space-y-4">
        <span className="text-primary font-eb text-3xl font-semibold">
          Experiences
        </span>
        <div className="flex flex-col gap-y-6">
          <div className="space-y-1">
            <span className="text-lg font-medium">
              Teaching Assistant at <span className="whitespace-nowrap">School of Information Technology,</span> KMITL.<br></br><span className="font-mono text-sm">July 2023 - Present</span>
            </span>
            <ul className="list-inside list-disc text-gray-300 text-sm md:text-base">
              <li>Problem Solving and Computer Programming, assists in learners solving Leetcode problems</li>
              <li>Information Technology Fundamental, held several lab classes teaching Git, Web Development, LinuxOS, and VM related technologies</li>
              <li>Object Oriented Programming, evaluate learner's lab performance and aassist in students' learning</li>
            </ul>
          </div>
          <div className="space-y-1">
            <span className="text-lg font-medium">
              SiData+, Siriraj<br></br>(Frontend Developer Internship).<br></br><span className="font-mono text-sm">Mar - May 2021</span>
            </span>
            <ul className="list-inside list-disc text-gray-300 text-sm md:text-base">
              <li>Researched how websites can assist in the health domain and Hospital day-to-day operations</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <span className="text-primary font-eb text-3xl font-semibold">
          Projects
        </span>
        <div className="flex flex-col gap-y-6">
          <div className="space-y-1">
            <h5 className="text-lg font-medium">
              ITKMITL TCAS <Link className="text-sm text-primary underline" target="_blank" href="https://tcas.it.kmitl.ac.th">(click)</Link>
            </h5>
            <ul className="list-inside list-disc text-gray-300 text-sm md:text-base">
              <li>A registration for grade 12 students for Information Technology faculty at King Mongkut’s Institute Technology Ladkrabang. Currently used by 500+ students in Thailand.</li>
              <li>Managed 6 years of technical debt and rewrote the entire frontend in React and Svelte.</li>
            </ul>
          </div>
          <div className="space-y-1">
            <h5 className="text-lg font-medium">
              Little Patient
            </h5>
            <ul className="list-inside list-disc text-gray-300 text-sm md:text-base">
              <li>A blood donation platform, that features queue reservation for hospitals. Comes with a back-office for hospital staff and people in emergency need.</li>
              <li>Work in collaboration with Siriraj health science Education Excellence center (SHEE). Got through the final round of the 24th National Software Contest.</li>
            </ul>
          </div>
          <div className="space-y-1">
            <h5 className="text-lg font-medium">
              Internship Summary <Link className="text-sm text-primary underline" target="_blank" href="https://psmcom.supratouch.dev">(click)</Link>
            </h5>
            <ul className="list-inside list-disc text-gray-300 text-sm md:text-base">
              <li>A website to summarizes and conclude my internship experiences and peers’ write-ups.</li>
              <li>Helped in creative design and programmed website animations, 3D graphics rendering and website landing page.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <span className="text-primary font-eb text-3xl font-semibold">
          Leaderships & Activities
        </span>
        <div className="flex flex-col gap-y-6">
          <div className="space-y-1">
            <h5 className="text-lg font-medium">
              IT Experience Club - Vice-President.<br></br><span className="font-mono text-sm">July 2023 - Now</span> <Link className="text-sm text-primary underline" target="_blank" href="https://www.facebook.com/ITxKMITL">(click)</Link>
            </h5>
            <span className="text-gray-300 text-sm md:text-base">
              Hosted events for students in the faculty and high school students who are interested in computer technology and programming.
            </span>
          </div>
          <div className="space-y-1">
            <h5 className="text-lg font-medium">
              Young Webmaster Camp 19 (Participant/Developer).
            </h5>
            <span className="text-gray-300 text-sm md:text-base">
              A hackathon camp hosted in association with Thai Webmaster and online Media association. Participated as a camper in the Web Programming track. Chosen only 20 from 371.</span>
          </div>
          <div className="space-y-1">
            <h5 className="text-lg font-medium">
              ToBeIT’67 Camp <span className="whitespace-nowrap">(Head of academic, Teaching Director)</span>.<br></br><span className="font-mono text-sm">Oct - Nov 2023</span>
            </h5>
            <span className="text-gray-300 text-sm md:text-base">
              Planned out classes and examination guidelines for 1000+ campers (both online and onsite). Taught SvelteKit, ExpressJS with Line Bot SDK, and JavaScript to 1000+ campers (both online and onsite).
            </span>
          </div>
          <div className="space-y-1">
            <h5 className="text-lg font-medium">
              Sairahut IT20 <span className="whitespace-nowrap">(Event Staff, Head of Technology).</span><br></br><span className="font-mono text-sm">July - Aug 2023</span>
            </h5>
            <span className="text-gray-300 text-sm md:text-base">
              Led the technology team, designed the game flow, and developed the Sairahut (สายรหัส) event in the faculty. The event is hosted on the website with the core game mechanic, score system, and leaderboard. The game is played concurrently with up to 300 people at once. Powered by SvelteKit, Tailwind CSS, tRPC, and hosted on Vercel.
            </span>
          </div>
          <div className="space-y-1">
            <h5 className="text-lg font-medium">
              ITCAMP 19 <span className="whitespace-nowrap">(Website Camp Teaching Director)</span><br></br><span className="font-mono text-sm">May - Jun 2023</span>
            </h5>
            <span className="text-gray-300 text-sm md:text-base">
              Taught a class of 25 high school students about React, Tailwind CSS, and Supabase.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
