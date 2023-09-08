import { client } from "@/utils";
import { EntryCollection } from "contentful";
import Link from "next/link";
import { useEffect, useState } from "react";

const SearchPosts = () => {
  const [keyword, setKeyword] = useState("");
  const [posts, setPosts] = useState<EntryCollection<any> | null>(null);
  const fetchPosts = async (keyword: string) => {
    const posts = await client.getEntries({
      content_type: "post",
      "fields.title[match]": keyword,
    });
    posts && setPosts(posts);
  };

  useEffect(() => {
    keyword?.trim() ? fetchPosts(keyword) : setPosts(null);
  }, [keyword]);

  return (
    <div className="w-4/12  relative">
      <input
        placeholder="search posts by title..."
        className="w-full h-10 bg-amber-100 border-2 border-black placeholder-black px-4 focus:ring-4 ring-orange-100 focus:bg-orange-50"
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      ></input>
      <div className="absolute left-0 top-[100%] h-fit w-full flex flex-col items-center bg-white shadow-md">
        {posts &&
          posts.items.map((post) => {
            return (
              post && (
                <div
                  key={post.sys.id}
                  className="flex w-full flex-wrap justify-between last:border-none p-2 gap-2 border-b-2 border-dashed border-black "
                >
                  <Link
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                    href={`/posts/${post.sys.id}`}
                  >
                    <span onClick={() => setKeyword("")} className="pointer">
                      {post.fields.title}
                    </span>

                    <span className="font-light">
                      {new Date(post.sys.createdAt).toLocaleDateString()}
                    </span>
                  </Link>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};
export default SearchPosts;
