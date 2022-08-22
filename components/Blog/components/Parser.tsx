import useCMSpath from "@components/utils/useCMSpath";
import Image from "next/image";
import { FC } from "react";
import { Block, BlogContent } from "types/blogContent";

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
          className="text-white font-kanit md:text-lg text-base"
          dangerouslySetInnerHTML={createMarkup(block.data.text!)}
        ></p>
      );
    case "header":
      return (
        <h2
          key={`blogcontent-${block.id}`}
          className={`md:text-${
            6 - block.data.level!
          }xl text-3xl text-secondary font-medium`}
          dangerouslySetInnerHTML={createMarkup(block.data.text!)}
        ></h2>
      );
    case "list":
      if (block.data.style === "unordered") {
        return (
          <>
            <ul
              key={`blogcontent-${block.id}`}
              className="flex-col flex gap-y-2 list-disc px-2 text-white md:text-lg text-sm font-kanit"
            >
              {block.data.items!.map((item, index) => {
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
            className="flex-col flex gap-y-2 px-2 list-decimal text-white md:text-lg text-sm font-kanit"
          >
            {block.data.items!.map((item, index) => {
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
          dangerouslySetInnerHTML={createMarkup(block.data.code!)}
          className="text-white bg-slate-800 text-xs px-3 py-6 whitespace-pre-wrap"
        ></code>
      );
    case "quote":
      return (
        <section
          className={`text-${block.data.alignment} flex flex-col gap-y-4 md:my-10`}
        >
          <q
            className="text-white font-semibold italic md:text-3xl text-lg font-kanit whitespace-pre-wrap"
            dangerouslySetInnerHTML={createMarkup(block.data.text!)}
          ></q>

          <span
            className="text-gray-200 font-medium text-sm text-right"
            dangerouslySetInnerHTML={createMarkup(block.data.caption!)}
          ></span>
        </section>
      );
    case "image":
      return (
        <figure
          key={block.id}
          className="flex flex-col items-center justify-start w-full gap-y-2"
        >
          <Image
            unoptimized
            src={`${cmsPath}${block.data.file!.url}`}
            width={block.data.file!.width}
            height={block.data.file!.height}
            alt={`${block.data.file!.alt} related image`}
          />
          {block.data.caption && (
            <figcaption
              dangerouslySetInnerHTML={createMarkup(block.data.caption!)}
              className="text-gray-400 text-sm md:text-base text-center"
            ></figcaption>
          )}
        </figure>
      );
    default:
      return <></>;
  }
};

export default BlogContentParser;
