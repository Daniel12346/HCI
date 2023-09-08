"use client";

import Image from "next/image";
import logo from "public/hci-blog-logo.svg";
import menuIcon from "public/hci-blog-menu.svg";
import triangleIcon from "public/hci-blog-triangle.svg";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import SearchPosts from "@/components/SearchPosts";
import { client } from "@/utils";
import { Entry } from "contentful-management";
import { EntryCollection } from "contentful";

const Nav = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [areCategoriesShown, setAreCategoriesShown] = useState(false);
  const [categories, setCategories] = useState<EntryCollection<any> | null>(
    null
  );
  useEffect(() => {
    const getCategories = async () => {
      const categories = await client.getEntries({
        content_type: "category",
      });
      categories && setCategories(categories);
    };
    getCategories();
  }, []);
  return (
    <div className="w-full ">
      <nav className="flex max-sm:justify-between justify-evenly items-center relative z-40 bg-amber-400 border-b-[3px] p-3 border-black mb-8">
        <div className="h-10 cursor-pointer hover">
          <Link href="/">
            <Image
              style={{ height: "100%", width: "auto" }}
              src={logo}
              alt="logo"
            ></Image>
          </Link>
        </div>
        <SearchPosts />
        <div
          className="h-10 p-1 cursor-pointer hover"
          onClick={() => setIsMenuShown(!isMenuShown)}
        >
          <Image
            style={{ height: "100%", width: "auto" }}
            src={menuIcon}
            alt="menu icon"
          ></Image>
        </div>
      </nav>
      <div
        data-is-menu-shown={isMenuShown}
        className="absolute right-0 top-0 w-full h-screen bg-amber-400 z-20 pt-4 max-w-md text-lg 
        data-[is-menu-shown=false]:hidden data-[is-menu-shown=false]:translate-x-full transition-all duration-500 ease-in-out"
      >
        <ul className="flex flex-col gap-y-6 pt-20 font-bold ">
          <li
            data-are-categories-shown={areCategoriesShown}
            className="px-8 flex flex-wrap cursor-pointer"
          >
            <span>topics</span>
            <div
              className={`ml-2 self-center  cursor-pointer ${
                !areCategoriesShown && "rotate-[270deg]"
              }`}
              onClick={() => setAreCategoriesShown(!areCategoriesShown)}
            >
              <Image src={triangleIcon} alt="triangle icon" />
            </div>
            <ul
              className={`font-semibold text-base w-full mt-1 ${
                !areCategoriesShown && "hidden"
              }`}
            >
              {categories?.items.map((category) => (
                <Link
                  key={category.sys.id}
                  href={`/categories/${category.sys.id}`}
                >
                  <li
                    onClick={() => setIsMenuShown(false)}
                    className="cursor-pointer hover:underline px-4 mb-1"
                  >
                    {(category.fields as any).title}
                  </li>
                </Link>
              ))}
            </ul>
          </li>
          {/* //TODO: */}
          <li
            className="px-8 cursor-pointer hover:underline"
            onClick={() => setIsMenuShown(false)}
          >
            <Link href={"/featured"}>featured posts</Link>
          </li>
          <li
            className="px-8 cursor-pointer hover:underline"
            onClick={() => setIsMenuShown(false)}
          >
            <Link href={"/recent"}>recent posts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
