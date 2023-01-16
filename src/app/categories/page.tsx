
import Post from "@/components/Post"
import Image from "next/image"


export default ()=>{
    return (
        <div className="flex justify-center">
          <div className="flex flex-col w-10/12 max-w-xl">
               <div className="flex flex-row align-bottom gap-1 pl-5 pb-3 mt-6 mb-5">
                    <div className="flex flex-col">
                      <h1 className="font-extrabold text-xl pl-5 mr-2 mb-2">categories</h1>
                      <ul className="flex flex-wrap gap-3">
                        <li><span className="text-xl underline">category 1</span></li>
                        <li><span className="text-xl underline">category 2</span></li>
                        <li><span className="text-xl underline">category 3</span></li>
                        <li><span className="text-xl underline">category 4</span></li>
                        <li><span className="text-xl underline">category 5</span></li>
                      </ul>
                  </div>
                </div>
            {/* <section>
                <div className="flex flex-row align-bottom gap-1 pl-5 pb-3 mt-6 mb-5">
                    <div className="flex items-center">
                      <h1 className="font-bold text-xl mr-2">sort by:</h1>
                      <div className="flex font-extrabold text-xl cursor-pointer">recent
                        <div className="flex">

                        </div>  
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                    <Post></Post>
                </div>
                <div className="mb-6">
                    <Post></Post>
                </div>
                <div className="mb-6">
                <Post></Post>
                </div>
                <div className="mb-6">
                    <Post></Post>
                </div>
            </section> */}
          </div>
       </div> 
    )
}