import Post from "@/components/Post";
import { client } from "@/utils";
import Link from "next/link";

const Categories = async () => {
  const categories = await client.getEntries({
    content_type: "category",
  });
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-10/12 max-w-xl">
        <div className="flex flex-row align-bottom gap-1 pl-5 pb-3 mt-6 mb-5">
          <div className="flex flex-col">
            <h1 className="font-extrabold text-xl pl-5 mr-2 mb-2">topics</h1>
            <ul className="flex flex-wrap gap-3">
              {categories.items.map((category) => (
                <li key={category.sys.id}>
                  <Link href={`/categories/${category.sys.id}`}>
                    <span className="text-xl underline">
                      {(category.fields as any).title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
