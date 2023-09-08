import { client } from "@/utils";
import Image from "next/image";

const PostDisplayGrid = async () => {
  const posts = await client.getEntries({
    content_type: "post",
    "fields.isFeatured": "true",
  });
  return (
    <div className="w-full  grid grid-cols-3 grid-rows-2 gap-2 bg-stone-50 p-2 border-2 border-black">
      {posts?.items.map((post) => (
        <div key={post.sys.id} className="row-span-full h-full cover border-2 border-black relative">
          <Image
            style={{ height: "100%", objectFit: "cover" }}
            //@ts-ignore
            src={"https:" + post.fields.coverImage.fields.file.url}
            alt="post cover image"
            // @ts-ignore
            width={post.fields.coverImage.fields.file.details.image.width}
            // @ts-ignore
            height={post.fields.coverImage.fields.file.details.image.height}
          ></Image>
          <span className="text-sm inline-block bottom-0 left-1 absolute bg-amber-300 w-fit font-bold px-1 border-2 border-black">
            {/* @ts-ignore */}
            {post.fields.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PostDisplayGrid;
