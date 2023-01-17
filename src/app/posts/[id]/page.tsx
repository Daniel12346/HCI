import SyntaxHighlightedCode from "@/components/SyntaxHighlightedCode"
import Image from "next/image"
import penguinImg from "public/animal-g7af8cc5e7_1920.jpg"

export default ()=>{
    return (   
    <div className="flex flex-col items-center">
         <div  className="relative mb-6 h-[25vh] max-h-64 border-2 border-black w-11/12 max-w-3xl">
             <Image priority style={{objectFit:"cover", height:"100%"}}src={penguinImg} alt="heading post image"></Image>
             <span className="text-lg inline-block bottom-[-0.6rem] left-[5%] absolute bg-yellow-100 w-auto max-w-[90%] font-bold p-2 border-2 border-black">naslov posta adipiscing enim eu turpis egestas </span>
         </div>
         <div className="flex flex-col items-center max-w-2xl w-11/12">
            <p className="px-1 mb-6">
                Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Arcu cursus vitae congue mauris. Bibendum enim facilisis gravida neque. Molestie nunc non blandit massa enim nec dui.
            </p>
            <h1 className="px-1 w-full font-bold mb-2 textlg">
                heading 1
            </h1>
            <p className="px-1  mb-6">
                Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Arcu cursus vitae congue mauris. Bibendum enim facilisis gravida neque. Molestie nunc non blandit massa enim nec dui.
            </p>
            <p className="px-1  mb-6">
                Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Arcu cursus vitae congue mauris. Bibendum enim facilisis gravida neque. Molestie nunc non blandit massa enim nec dui.
            </p>
            <div className="w-10/12 mb-2" >
                <Image style={{objectFit:"cover", maxHeight:"10rem"}}src={penguinImg} alt="post image"></Image>
                <span className="pl-2 text-slate-600 text-sm">opis slike</span>
            </div>
            <p className="px-1  mb-6">
                Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Arcu cursus vitae congue mauris. Bibendum enim facilisis gravida neque. Molestie nunc non blandit massa enim nec dui.
            </p>
            <p className="px-1  mb-6">
                Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Arcu cursus vitae congue mauris. Bibendum enim facilisis gravida neque. Molestie nunc non blandit massa enim nec dui.
            </p>
            <SyntaxHighlightedCode code={`useEffect(()=>{
const getComments = async ()=>{
try{
setIsLoading(true);
const res = await fetch("https://jsonplaceholder.typicode.com/comments");
const data = await res.json();
console.log(res);
setComments([...comments, ...data]);
setIsLoading(false);

}catch(error){
setIsLoading(false);
setError(error);
}
}
getComments();
}
, [])`}/>
         <p className="px-1  mb-6">
                Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Arcu cursus vitae congue mauris. Bibendum enim facilisis gravida neque. Molestie nunc non blandit massa enim nec dui.
            </p>
        </div>
     </div>)
    }