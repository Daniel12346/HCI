import SyntaxHighlightedCode from "@/components/SyntaxHighlightedCode";
import { client, getBlogPost, getBlogPosts } from "@/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types";
import { Entry, RichTextContent } from "contentful";
import Image from "next/image";
import penguinImg from "public/animal-g7af8cc5e7_1920.jpg";
//@ts-ignore

export const generateStaticParams = async () => {
  const posts = await client.getEntries({
    content_type: "post",
  });
  return posts.items.map((post) => ({ id: post.sys.id }));
};

interface PostProps {
  params: {
    id: string;
  };
}

const RenderRichTextContent = (content: Document) => {
  const options: any = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        return <h2 className="text-2xl font-bold mb-4 max-w-xl">{children}</h2>;
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        if (node.content[0].marks[0]?.type === "code") {
          return (
            <div className="w-full p-2 max-w-2xl">
              <SyntaxHighlightedCode code={node.content[0].value} />
            </div>
          );
        }
        return <p className="mb-4 max-w-xl">{children}</p>;
      },
    },
  };
  return documentToReactComponents(content, options);
};

const Post = async ({ params }: PostProps) => {
  const post = await client.getEntry<any>(params.id);
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative mb-6 h-[25vh] max-h-64 border-2 border-black w-11/12 max-w-3xl">
        <Image
          priority
          style={{
            objectFit: "cover",
            height: "100%",
            objectPosition: "center",
          }}
          src={"https:" + post.fields.coverImage.fields.file.url}
          width={post.fields.coverImage.fields.file.details.image.width}
          height={post.fields.coverImage.fields.file.details.image.height}
          alt="heading post image"
        ></Image>
        <span className="text-lg inline-block bottom-[-0.6rem] left-[5%] absolute bg-amber-300 w-auto max-w-[90%] font-bold p-2 border-2 border-black">
          {post.fields.title}
        </span>
      </div>
      <div className="flex flex-col  max-w-2xl w-11/12">
        {RenderRichTextContent(post.fields.content)}
      </div>
    </div>
  );
};
export default Post;
