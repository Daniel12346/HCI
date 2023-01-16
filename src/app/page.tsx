import Post from "../components/Post";

import PostsDisplayGrid from "src/components/PostsDisplayGrid";

const Home = ()=>{
  return  (
   <div className="flex justify-center">
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
        <section className="flex flex-col">
         <h1 className="font-extrabold text-2xl pl-5 pb-3">categories</h1>
         <div className="flex justify-between self-center w-full max-w-md">
            <span className="font-semibold">category 1</span>
            <span className="font-semibold">category 2</span>
            <span className="font-semibold">category 3</span>
            <span className="font-semibold">category 4</span>
          </div>  
      </section>
      </div>
   </div>)
}
export default Home;