import Post from "../components/Post";

import PostsDisplayGrid from "src/components/PostsDisplayGrid";
import { client, getBlogPosts } from "@/utils";
import { Entry } from "contentful";

const Home = async () => {
  const posts = await client.getEntries({
    content_type: "post",
    order: "-sys.createdAt",
    limit: 3,
  });
  return (
    <div className="flex items-center flex-col">
      <div className="flex flex-col w-10/12 max-w-xl">
        <div className="flex flex-col items-center w-full">
          <h1 className="mb-10 bg-amber-200 p-5  outline-dashed outline-black">
            <span className="font-extrabold text-2xl">
              Daniel Vrandečić&apos;{" "}
              <span className="text-amber-700 text-4xl">blog</span> -{" "}
              <span className="font-normal">
                my{" "}
                <span className="font-light text-sm">and ChatGPT&apos;s</span>{" "}
                thoughts on everything
              </span>
            </span>
          </h1>
        </div>
        <div className="flex flex-col  w-full align-text-bottom gap-1 pl-5 pb-3">
          <div className="w-full flex gap-1">
            <h1 className="font-extrabold text-2xl">featured</h1>
            <a className="underline inline-block self-end pb-1 ml-1 font-semibold">
              view more
            </a>
          </div>
          <div className="w-full">
            <span>posts hand-picked by the author of this blog</span>
          </div>
        </div>
        {/* @ts-expect-error Server Component */}
        <PostsDisplayGrid />
        <section className="mb-10">
          <div className="flex flex-row align-text-bottom gap-1 pl-5 pb-3 mt-9">
            <h1 className="font-extrabold text-2xl">recent posts</h1>
            <a className="underline inline-block self-end pb-1 ml-1 font-semibold">
              view more
            </a>
          </div>
          {posts.items.map((post) => {
            return (
              post && (
                <div className="mb-6" key={post.sys.id}>
                  <Post post={post} />
                </div>
              )
            );
          })}
        </section>
      </div>
    </div>
  );
};
export default Home;
