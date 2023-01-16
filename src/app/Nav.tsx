import Image from "next/image";
import logo from "public/hci-blog-logo.svg";
import menuIcon from "public/hci-blog-menu.svg";
import penguinImg from "public/animal-g7af8cc5e7_1920.jpg"


export default () => {
  return  (
  <nav className='flex justify-evenly items-center bg-orange-100 border-b-[3px] p-4 border-black mb-8'>
    <div className='h-10 cursor-pointer'>
        <Image style={{height:"100%", width:"auto"}} src={logo} alt="logo"></Image>
    </div>
    <div className='h-12 w-12 rounded-full border-2 p-0.5 border-black cursor-pointer'>
        <Image style={{height:"100%", width:"auto", borderRadius:"9999px", objectFit:"cover"}} src={penguinImg} alt="logo"></Image>
    </div>
    <div className="w-4/12">
        <input placeholder="search ..." className='w-full h-10 bg-amber-50 border-2 border-black placeholder-black px-4 focus:ring-4 ring-yellow-300'></input>
    </div>
    <div className='h-10 p-1 cursor-pointer'>
        <Image style={{height:"100%", width:"auto"}} src={menuIcon} alt="logo"></Image>
    </div>
  </nav>)
}