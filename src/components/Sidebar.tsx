import { client } from "@/utils";
import Link from "next/link";

const Sidebar = async () => {
  const category = await client.getEntries({
    content_type: "category",
  });
  return (
    <div className="w-full hidden lg:flex justify-center">
      <aside className="hidden md:flex flex-col items-center h-fit p-6 mt-6 w-fit ml-3  outline-amber-300 outline-dashed">
        <div className="flex flex-col gap-3">
          {/* <Link className="text-lg" href="/">
          Home
        </Link> */}
          <span className="font-bold text-lg">topics:</span>
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
