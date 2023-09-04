import Image from "next/image"
import penguinImg from "public/animal-g7af8cc5e7_1920.jpg"

//TODO: post prop
export default ({accentColorClassName="bg-amber-300", category="coding"})=>{
    return (
        <div className="flex flex-row justify-center">
          <div className="w-11/12 max-w-lg border-2 border-black bg-stone-100">
            <div className="p-3">
               <div  className="relative mb-3 h-[25vh] max-h-44 border-2 border-black">
                    <Image style={{objectFit:"cover", height:"100%"}}src={penguinImg} alt="post image"></Image>
                    <span className={`inline-block bottom-[-0.6rem] left-3 absolute bg-amber-300  w-5/6 font-bold p-1 border-2 border-black`}>naslov posta adipiscing enim eu turpis egestas </span>
               </div>
               <div className="flex flex-row flex-wrap justify-end py-3 px-2">
                  <p className="w-full max-w-md">
                  Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Molestie a iaculis at erat pellentesque adipiscing commodo elit at...
                  </p>
                  <span className="underline underline-offset-2 py-1">continue reading</span>
               </div>
               {
                //TODO: style border
               }
               <div className="flex  flex-wrap justify-between border-t-2 border-dashed border-black pt-2 w-full">
                     <div className="flex gap-x-2 max-sm:flex-col">
                        <span>
                           2 days ago 
                        </span>
                         <span>
                           <span className={`font-semibold ${accentColorClassName} px-1 inline-block`}>{category}</span>
                        </span>
                    </div>
                    <div className="flex gap-x-2 max-sm:flex-col">
                        <span>
                           <span className="font-semibold">10</span> views
                        </span>
                        <span>
                            <span className="font-semibold">3</span> comments
                        </span>
                    </div>
                    {/* <span className="inline-block">
                        <span className={`font-semibold ${accentColorClassName} px-1 mr-1 inline-block`}>{category}</span>
                        <span className="font-semibold">2</span> days ago 
                    </span> */}
               </div>
            </div>
          </div>
        </div>)
}
      