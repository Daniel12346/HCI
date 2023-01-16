import Image from "next/image";
import penguinImg from "public/animal-g7af8cc5e7_1920.jpg"
import Post from "./Post";

import PostsDisplay from "./PostsDisplayGrid";
const Home = ()=>{
  return  (
   <div className="flex justify-center">
      <div className="flex flex-col w-10/12 max-w-xl">
         <div className="flex flex-row align-text-bottom gap-1 pl-5 pb-3">
            <h1 className="font-extrabold text-2xl">top posts</h1>
            <a className="underline inline-block self-end pb-1 font-semibold">view more</a>
         </div>
       <PostsDisplay/>
      <section className="mb-10">
          <div className="flex flex-row align-text-bottom gap-1 pl-5 pb-3 mt-9">
             <h1 className="font-extrabold text-2xl">recent posts</h1>
              <a className="underline inline-block self-end pb-1 font-semibold">view more</a>
            </div>
            <div className="mb-6">
              <Post></Post>
            </div>
            <div>
              <Post></Post>
            </div>
       </section>
        <section>
         <h1 className="font-extrabold text-2xl pl-5 pb-3">categories</h1>
      </section>
      </div>
   </div>)
}
export default Home;