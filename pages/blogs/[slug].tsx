import ReturnNavbar from "@components/Blog/components/ReturnNavbar";
import { initialBlogQuery } from "@components/utils/BlogQuery";
import useCMSpath from "@components/utils/useCMSpath";
import axios from "axios";
import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Attribute, Blogs } from "types/blog";
import { BlogContent } from "types/blogContent";
import BlogContentParser from "@components/Blog/components/Parser";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Blog: NextPage<Props> = ({ Blogs }) => {
  const initialFetch = useRef(true);
  const [content, setContent] = useState<BlogContent>(
    JSON.parse(Blogs.data[0].attributes.content)
  );
  const [blog, setBlog] = useState<Attribute | null>(Blogs.data[0].attributes);
  const cmsPath = useCMSpath();
  const router = useRouter();

  useEffect(() => {
    if (!initialFetch.current) return;

    async function fetchBlog() {
      const { data: blog } = await axios.get<Blogs>(
        `${cmsPath}/api/articles?filters[slug]=${router.query
          .slug!}&populate%5B0%5D=cover&populate%5B1%5D=category`
      );
      const content = JSON.parse(blog.data[0].attributes.content);
      setContent(content);
      setBlog(blog.data[0].attributes);
      console.log(content);
    }

    fetchBlog();

    return () => {
      initialFetch.current = false;
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-dark relative pt-10 pb-8">
      <Head>
        <title>{blog?.title}</title>
        <meta name="description" content="Gus' Blogs" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Supratouch Suwatno" />
        <meta name="keywords" content="Technology, Blogs, Coding, Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ReturnNavbar back={true} />
      <article className="md:pt-12 mt-8 px-8 md:px-80 flex flex-col md:gap-y-16 gap-y-12">
        <div className="flex flex-col gap-y-4 md:gap-y-12">
          <h1 className="md:text-5xl text-xl md:leading-tight text-white font-semibold font-kanit">
            {blog!.title}
          </h1>
          <div className="md:px-48">
            <Image
              src={`${cmsPath}${blog!.cover.data.attributes.url}`}
              width={blog!.cover.data.attributes.width}
              height={blog!.cover.data.attributes.height}
              alt={`${blog!.title} cover photo`}
              priority
            />
          </div>
        </div>
        <div className="md:px-56">
          <BlogContentParser content={content} />
        </div>
      </article>
      <footer className="py-12 px-2 flex flex-col gap-y-4">
        <small className="text-sm text-center text-white">
          An article written by Gus
        </small>
        <div className="flex justify-center items-center gap-x-6">
          <Link target={"_blank"} href="https://github.com/DrowningToast">
            <a target={"_blank"}>
              <FontAwesomeIcon
                className="text-white"
                size={"2x"}
                icon={["fab", "github"]}
              />
            </a>
          </Link>
          <Link
            target={"_blank"}
            href="https://www.linkedin.com/in/supratouch-suwatno-7a8608232/"
          >
            <a target={"_blank"}>
              <FontAwesomeIcon
                className="text-white"
                size={"2x"}
                icon={["fab", "linkedin"]}
              />
            </a>
          </Link>
          <Link target={"_blank"} href="https://medium.com/@drowningtoast">
            <a target="_blank">
              <FontAwesomeIcon
                className="text-white"
                size={"2x"}
                icon={["fab", "medium"]}
              />
            </a>
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default Blog;

export async function getStaticPaths() {
  const cmsPath = useCMSpath();

  const { data: Blogs } = await axios.get<Blogs>(
    `${cmsPath}/api/articles?${initialBlogQuery}`
  );
  if (!Blogs) throw "Failed fetching blogs data while generating paths";

  return {
    paths: Blogs.data.map((blogData) => {
      return { params: { slug: blogData.attributes.slug } };
    }),
    fallback: false,
  };
}

interface Props {
  Blogs: Blogs;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const cmsPath = useCMSpath();

  const { data: Blogs } = await axios.get<Blogs>(
    `${cmsPath}/api/articles?filters[slug]=${context.params!
      .slug!}&populate%5B0%5D=cover&populate%5B1%5D=category`
  );
  if (!Blogs) throw "Failed fetching blogs data while generating paths";

  return {
    props: {
      Blogs,
    },
  };
}
