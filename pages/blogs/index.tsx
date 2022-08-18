import Card from "@components/Blog/components/Card";
import ReturnNavbar from "@components/Blog/components/ReturnNavbar";
import useCMSpath from "@components/utils/useCMSpath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import qs from "qs";
import { useEffect, useReducer, useRef, useState } from "react";
import { Blogs } from "types/blog";
import axios from "axios";
import { initialBlogQuery } from "@components/utils/BlogQuery";
import Head from "next/head";

interface queryStringGetterParam {
  page: number;
  pageSize?: number;
}

const getQueryString = (params: queryStringGetterParam): string => {
  return qs.stringify({
    sort: ["createdAt"],
    fields: ["title", "description", "slug"],
    populate: ["cover", "category"],
    pagination: {
      page: params.page,
      pageSize: params.pageSize ?? 1,
    },
  });
};

interface Props {
  initialBlogs: Blogs | null;
}

const Blogs: NextPage<Props> = ({ initialBlogs }) => {
  let [page, setPage] = useState<number>(1);
  const [pageCount, _pageCount] = useState<number>(0);
  const cmsPath = useCMSpath();
  // const [blogs, setBlogs] = useState<Blogs | null>(initialBlogs);
  const [blogs, setBlogs] = useReducer(
    (state: Blogs | null, action: Blogs): Blogs | null => {
      if (!state) {
        return {
          data: [...action.data],
          meta: {
            ...action.meta,
          },
        };
      } else {
        return {
          data: [...state?.data, ...action.data],
          meta: {
            ...action.meta,
          },
        };
      }
    },
    initialBlogs
  );
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const initialRender = useRef(true);

  async function fetchNextPage() {
    try {
      setIsFetching(true);
      const { data: newBlogs } = await axios.get<Blogs>(
        `${cmsPath}/api/articles?${getQueryString({ page: page + 1 })}`
      );
      if (!newBlogs) throw "Pagination fetching error";
      setPage(++page);
      _pageCount(newBlogs.meta.pagination.pageCount);
      setBlogs(newBlogs);
      setIsFetching(false);
    } catch (e) {
      console.log(e);
    }
  }

  // Client-side fetching
  useEffect(() => {
    if (blogs || !initialRender.current) return;
    if (!cmsPath) throw "Missing CMS path";
    async function fetchBlogs() {
      console.log(`${cmsPath}articles?${initialBlogQuery}`);
      const { data } = await axios.get<Blogs>(
        `${cmsPath}/api/articles?${initialBlogQuery}`
      );
      if (!data) throw "Failed fetching blogs data on client-side part";
      setBlogs(data);
      _pageCount(data.meta.pagination.pageCount);
    }
    fetchBlogs();
    return () => {
      initialRender.current = false;
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-dark relative pt-10 pb-8">
      <Head>
        <title>Gus' Blogs</title>
        <meta name="description" content="Gus' Blogs" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Supratouch Suwatno" />
        <meta name="keywords" content="Technology, Blogs, Coding, Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
            <h1
              key={`left-fancy-blog-header-${i}`}
              className="opacity-30 text-white w-max whitespace-nowrap text-2xl font-semibold"
            >
              My latest blog
            </h1>
          );
        })}
        <h1 className="text-white w-max whitespace-nowrap text-2xl font-semibold">
          My latest blog
        </h1>
        {Array.from(Array(7).keys()).map((i) => {
          return (
            <h1
              key={`left-fancy-blog-header-${i}`}
              className="opacity-30 text-white w-max whitespace-nowrap text-2xl font-semibold"
            >
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
      <section className="w-full grid grid-cols-1 place-items-center my-10 gap-y-10">
        {blogs &&
          blogs.data.map(({ attributes, id }) => {
            return (
              <Card
                key={`blog-card-preview-${id}`}
                title={attributes.title}
                description={attributes.description}
                backgroundURL={
                  attributes.cover.data?.attributes.formats.thumbnail.url
                }
                slug={attributes.slug}
              />
            );
          })}
      </section>
      {page < pageCount && (
        <div className="w-full grid place-items-center mt-24 mb-6">
          <button
            onClick={fetchNextPage}
            className="text-lg px-20 py-0.5 rounded-full border-2 border-alttertiary text-center mx-auto text-white"
          >
            {!isFetching ? "Load more" : "Loading"}
          </button>
        </div>
      )}
    </main>
  );
};

export default Blogs;

export async function getStaticProps() {
  const cmsPath = useCMSpath();

  if (!cmsPath) {
    throw "Missing CMS path on static site generation part";
  }
  const { data } = await axios.get<Blogs>(
    `${cmsPath}/api/articles?${initialBlogQuery}`
  );
  if (!data) throw "Failed fetching blogs data on rendering side";

  return {
    props: {
      blogs: data,
    },
  };
}
