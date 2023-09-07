import Post from "@/components/Post";
import { client, getCategoryPosts } from "@/utils";
import Image from "next/image";
import codingIcon from "public/hci-blog-coding-icon.svg";

interface CategoryProps {
  params: {
    id: string;
  };
}

export const generateStaticParams = async () => {
  const categories = await client.getEntries({
    content_type: "category",
  });
  return categories.items.map((category) => ({
    id: category.sys.id,
  }));
};

const Category = async ({ params }: CategoryProps) => {
  const category = await client.getEntry(params.id);
  const posts = await getCategoryPosts(params.id);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-10/12 max-w-xl">
        <section>
          <div className="flex flex-row align-bottom gap-1 pl-5 pb-3 mt-6 mb-5">
            <div className="flex items-center">
              <div
                style={{ color: "#" + (category.fields as any).flairColor }}
                className={`flex font-extrabold text-3xl`}
              >
                {(category.fields as any).title}
                {/* <div className="flex ml-2 w-full">
                  <Image
                    style={{ maxWidth: "fit-content" }}
                    src={codingIcon}
                    alt="coding icon"
                  ></Image>
                </div> */}
              </div>
            </div>
          </div>
          {posts.items.map((post) => (
            <Post key={post.sys.id} post={post} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Category;
