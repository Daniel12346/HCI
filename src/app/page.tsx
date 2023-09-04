"use client"
import Post from "../components/Post";

import PostsDisplayGrid from "src/components/PostsDisplayGrid";
import AuthHome from "@/components/AuthHome";
import { useEffect } from "react";
import getBlogPosts from "@/utils";

const Home = ()=>{
  useEffect(()=>{
    getBlogPosts().then(console.log)
  },[])
  return  (
   <div className="flex items-center flex-col">
     <section className="flex flex-col mb-12 mt-3 w-10/12 max-w-xl max-sm:mb-10">
         <h1 className="font-extrabold text-2xl pl-5 pb-2 mb-4">categories</h1>
         <div className="flex justify-between w-full max-w-xl flex-wrap gap-2">
            <span className="font-semibold">category 1</span>
            <span className="font-semibold">category 2</span>
            <span className="font-semibold">category 3</span>
            <span className="font-semibold">category 4</span>
          </div>  
      </section>
      <div className="max-w-xs">
      {/* TODO: move */}
          <AuthHome />
      </div>
      <div className="flex flex-col w-10/12 max-w-xl">
         <div className="flex flex-row align-text-bottom gap-1 pl-5 pb-3">
            <h1 className="font-extrabold text-2xl">top posts</h1>
            <a className="underline inline-block self-end pb-1 ml-1 font-semibold">view more</a>
         </div>
       <PostsDisplayGrid/>
      <section className="mb-10">
          <div className="flex flex-row align-text-bottom gap-1 pl-5 pb-3 mt-9">
             <h1 className="font-extrabold text-2xl">recent posts</h1>
              <a className="underline inline-block self-end pb-1 ml-1 font-semibold">view more</a>
            </div>
            <div className="mb-6">
              <Post></Post>
            </div>
            <div>
              <Post></Post>
            </div>
       </section>
      </div>
   </div>)
}
export default Home;