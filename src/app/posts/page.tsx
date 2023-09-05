import Post from "@/components/Post";
import Image from "next/image";
import triangleIcon from "public/hci-blog-triangle.svg";

const Posts = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-11/12 max-w-xl">
        <section>
          <div className="flex flex-row align-bottom gap-1 pl-5 pb-3 mt-6 mb-5">
            <div className="flex items-center">
              <h1 className="font-bold text-xl mr-2">sort by:</h1>
              <div className="flex font-extrabold text-xl cursor-pointer">
                recent
                <div className="flex">
                  <Image src={triangleIcon} alt="triangle icon"></Image>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mb-6">
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
                </div> */}
        </section>
      </div>
    </div>
  );
};

export default Posts;
