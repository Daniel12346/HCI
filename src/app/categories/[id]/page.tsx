import Post from "@/components/Post"
import Image from "next/image"
import codingIcon from "public/hci-blog-coding-icon.svg"

export default ()=>{
    return (
        <div className="flex justify-center">
          <div className="flex flex-col w-10/12 max-w-xl">
            <section>
                <div className="flex flex-row align-bottom gap-1 pl-5 pb-3 mt-6 mb-5">
                    <div className="flex items-center relative before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-[105%] before:bg-orange-100 before:-z-10">
                      {/* <h1 className="font-bold text-xl mr-2">sort by:</h1> */}
                      <div className="flex font-extrabold text-2xl cursor">coding
                        <div className="flex ml-2">
                          <Image src={codingIcon} alt="coding icon"></Image>
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
            </section>
          </div>
       </div> 
    )
}