import Post from "@/components/Post";
import { client } from "@/utils";

const FeaturedPosts = async () => {
  const posts = await client.getEntries({
    content_type: "post",
    "fields.isFeatured": "true",
  });
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-10/12 max-w-xl">
        <section>
          <div className="flex flex-row align-bottom gap-1 pl-5 pb-3 mt-6 mb-5">
            <div className="flex items-center">
              <div className={`flex font-extrabold text-3xl`}>
                featured posts
              </div>
            </div>
          </div>
          {posts?.items.map((post) => (
            <div className="mb-6" key={post.sys.id}>
              <Post key={post.sys.id} post={post} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default FeaturedPosts;
