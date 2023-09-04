import Image from "next/image";

//TODO: images prop 
import featherImg from "public/blue-feather-g66219b108_1920.jpg"
import penguinImg from "public/animal-g7af8cc5e7_1920.jpg"

export default ()=>{
    return(
    <div className="w-full max-h-[20rem]  grid grid-cols-3 grid-rows-2 gap-2 bg-stone-50 p-2 border-2 border-black">
            <div className="row-span-full h-full cover border-2 border-black relative">
               <Image style={{height:"100%", objectFit:"cover"}} src={featherImg} alt="example img"></Image>
                <span className="inline-block bottom-0 left-1 absolute bg-amber-300 w-5/6 font-bold p-1 border-2 border-black">Title</span>
             </div>
             <div className="border-2 border-black relative"> 
               <Image style={{height:"100%", objectFit: "cover"}} src={penguinImg} alt="example img"></Image>
               <span className="inline-block bottom-0 left-1 absolute bg-amber-300 w-5/6 font-bold p-1 border-2 border-black">Title</span>
             </div >
             <div className="border-2 border-black relative">
               <Image style={{height:"100%",objectFit: "cover"}} src={featherImg} alt="example img"></Image>
                 <span className="inline-block bottom-0 left-1 absolute bg-amber-300 w-5/6 font-bold p-1 border-2 border-black">Title</span>
             </div> 
             <div className="border-2 border-black relative">
               <Image style={{height:"100%",objectFit: "cover"}} src={featherImg} alt="example img"></Image>
               <span className="inline-block bottom-0 left-1 absolute bg-amber-300 w-5/6 font-bold p-1 border-2 border-black">Title</span>
             </div>
              <div className="border-2 border-black relative">
               <Image style={{height:"100%",objectFit: "cover"}} src={featherImg} alt="example img"></Image>
               <span className="inline-block bottom-0 left-1 absolute bg-amber-300 w-5/6 font-bold p-1 border-2 border-black">Title</span>
             </div>        
    </div>)
    }