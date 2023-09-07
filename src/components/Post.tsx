import { Entry } from "contentful";
import Image from "next/image";
import Link from "next/link";

interface PostProps {
  post: Entry<any>;
  accentColorClassName?: string;
}
//TODO: post prop
const Post = ({ post, accentColorClassName = "bg-amber-300" }: PostProps) => {
  const category = post.fields.category;
  return (
    <div className="flex flex-row justify-center">
      <div className="w-full lg:w-11/12 max-w-lg border-2 border-black bg-stone-100 ">
        <div className="p-3">
          <div className="relative mb-3 h-[25vh] max-h-44 border-2 border-black">
            <Image
              style={{ objectFit: "cover", height: "100%" }}
              //TODO:
              src={"https:" + post.fields.coverImage.fields.file.url}
              width={post.fields.coverImage.fields.file.details.image.width}
              height={post.fields.coverImage.fields.file.details.image.height}
              alt="post image"
            ></Image>
            <span
              className={`inline-block bottom-[-0.6rem] left-3 absolute bg-amber-300  w-5/6 font-bold p-1 border-2 border-black`}
            >
              {post.fields.title}
            </span>
          </div>
          <div className="flex flex-row flex-wrap justify-end py-3 px-2">
            <p className="w-full max-w-md mb-2">
              {post.fields.content.content[0].content[0].value}
            </p>
            <div className="flex items-center justify-between w-full">
              <span>{new Date(post.sys.createdAt).toDateString()}</span>
              <span className="underline underline-offset-2 py-1">
                <Link href={`/posts/${post.sys.id}`}>continue reading</Link>
              </span>
            </div>
          </div>
          {
            //TODO: style border
          }
          <div className="flex  flex-wrap justify-between border-t-2 border-dashed border-black pt-2 w-full">
            <div className="flex gap-x-2 max-sm:flex-col">
              <span>
                <span
                  style={{ backgroundColor: "#" + category.fields.flairColor }}
                  className={`font-semibold px-1 inline-block text-white`}
                >
                  {category.fields.title}
                </span>
              </span>
            </div>
            {/* <div className="flex gap-x-2 max-sm:flex-col">
              <span>
                <span className="font-semibold">10</span> views
              </span>
              <span>
                <span className="font-semibold">3</span> comments
              </span>
            </div> */}
            {/* <span className="inline-block">
                        <span className={`font-semibold ${accentColorClassName} px-1 mr-1 inline-block`}>{category}</span>
                        <span className="font-semibold">2</span> days ago 
                    </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
