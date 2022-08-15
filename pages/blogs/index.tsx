import Card from "@components/Blog/components/Card";
import ReturnNavbar from "@components/Blog/components/ReturnNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";

const Blogs: NextPage = () => {
  return (
    <main className="w-full min-h-screen bg-dark relative pt-10">
      <ReturnNavbar />
      <section className="text-tertiary text-lg h-[30vh] flex flex-col justify-center items-between px-8 gap-y-4">
        <h2 className="text-left">
          Life is like a RPG adventure, the map just keep expanding with time.
        </h2>
        <h2 className="text-right">Here are my logss</h2>
      </section>
      <header className="w-full max-w-screen overflow-x-hidden py-2 flex justify-center items-center gap-x-4">
        {Array.from(Array(7).keys()).map((i) => {
          return (
            <h1 className="opacity-30 text-white w-max whitespace-nowrap text-2xl font-semibold">
              My latest blog
            </h1>
          );
        })}
        <h1 className="text-white w-max whitespace-nowrap text-2xl font-semibold">
          My latest blog
        </h1>
        {Array.from(Array(7).keys()).map((i) => {
          return (
            <h1 className="opacity-30 text-white w-max whitespace-nowrap text-2xl font-semibold">
              My latest blog
            </h1>
          );
        })}
      </header>
      <form className="w-full h-14 px-4 py-2 flex justify-around items-center">
        <input
          placeholder="Article name..."
          type="text"
          className="border-white bg-transparent px-3 py-1 rounded-full border-2 w-64"
        />
        <button className="bg-white rounded-full h-full aspect-square">
          <FontAwesomeIcon icon={["fas", "search"]} />
        </button>
      </form>
      <section className="w-full grid grid-cols-1 place-items-center my-6 gap-y-10">
        <Card />
        <Card />
      </section>
    </main>
  );
};

export default Blogs;
