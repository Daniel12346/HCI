import { client } from "@/utils";
import Link from "next/link";

const Sidebar = async () => {
  const category = await client.getEntries({
    content_type: "category",
  });
  return (
    <div className="flex justify-center mb-4 w-10/12">
      <aside className="hidden md:flex flex-col items-center h-fit p-6 mt-6 w-fit ml-3 outline-amber-300 outline-dashed">
        <div className="flex flex-wrap justify-between md:flex-col gap-3">
          <span className="font-extrabold text-xl w-full px-2">topics:</span>
          {category.items.map((category) => (
            <Link key={category.sys.id} href={`/categories/${category.sys.id}`}>
              <span className="text-lg hover:underline px-2">
                {(category.fields as any).title}
              </span>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};
export default Sidebar;
