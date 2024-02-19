import useCMSpath from "@components/utils/useCMSpath";
import Image from "next/image";
import { type FC } from "react";
import { type Block, type BlogContent } from "types/blogContent";

interface Props {
  content: BlogContent;
}

const BlogContentParser: FC<Props> = ({ content }) => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-y-6">
        {content.blocks.map((block, index) => {
          return <Parser key={`blog-parser-${index}`} block={block} />;
        })}
      </div>
    </>
  );
};

interface _parserProp {
  block: Block;
}

const createMarkup = (text: string) => {
  return {
    __html: text,
  };
};
const Parser: FC<_parserProp> = ({ block }) => {
  const cmsPath = useCMSpath();

  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={`blogcontent-${block.id}`}
          className="font-kanit text-base text-white md:text-lg"
          dangerouslySetInnerHTML={createMarkup(block.data.text)}
        ></p>
      );
    case "header":
      return (
        <h2
          key={`blogcontent-${block.id}`}
          className={`md:text-${
            6 - block.data.level
          }xl text-3xl font-medium text-secondary`}
          dangerouslySetInnerHTML={createMarkup(block.data.text)}
        ></h2>
      );
    case "list":
      if (block.data.style === "unordered") {
        return (
          <>
            <ul
              key={`blogcontent-${block.id}`}
              className="font-kanit flex list-disc flex-col gap-y-2 px-2 text-sm text-white md:text-lg"
            >
              {block.data.items.map((item, index) => {
                return (
                  <li
                    key={`blogcontent-${block.id}-${index}`}
                    dangerouslySetInnerHTML={createMarkup(item)}
                  ></li>
                );
              })}
            </ul>
          </>
        );
      } else if (block.data.style === "ordered") {
        return (
          <ol
            key={block.id}
            className="font-kanit flex list-decimal flex-col gap-y-2 px-2 text-sm text-white md:text-lg"
          >
            {block.data.items.map((item, index) => {
              return (
                <li
                  className="before:content[- ]"
                  dangerouslySetInnerHTML={createMarkup(item)}
                  key={`blogcontent-${block.id}-${index}`}
                ></li>
              );
            })}
          </ol>
        );
      }
    case "code":
      return (
        <code
          dangerouslySetInnerHTML={createMarkup(block.data.code)}
          className="whitespace-pre-wrap bg-slate-800 px-3 py-6 text-xs text-white"
        ></code>
      );
    case "quote":
      return (
        <section
          className={`text-${block.data.alignment} flex flex-col gap-y-4 md:my-10`}
        >
          <q
            className="font-kanit whitespace-pre-wrap text-lg font-semibold italic text-white md:text-3xl"
            dangerouslySetInnerHTML={createMarkup(block.data.text)}
          ></q>

          <span
            className="text-right text-sm font-medium text-gray-200"
            dangerouslySetInnerHTML={createMarkup(block.data.caption)}
          ></span>
        </section>
      );
    case "image":
      return (
        <figure
          key={block.id}
          className="flex w-full flex-col items-center justify-start gap-y-2"
        >
          <Image
            unoptimized
            src={`${cmsPath}${block.data.file.url}`}
            width={block.data.file.width}
            height={block.data.file.height}
            alt={`${block.data.file.alt} related image`}
          />
          {block.data.caption && (
            <figcaption
              dangerouslySetInnerHTML={createMarkup(block.data.caption)}
              className="text-center text-sm text-gray-400 md:text-base"
            ></figcaption>
          )}
        </figure>
      );
    default:
      return <></>;
  }
};

export default BlogContentParser;
