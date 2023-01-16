"use client"

import Image from "next/image";
import logo from "public/hci-blog-logo.svg";
import menuIcon from "public/hci-blog-menu.svg";
import triangleIcon from "public/hci-blog-triangle.svg"
import penguinImg from "public/animal-g7af8cc5e7_1920.jpg"
import Link from "next/link";
import { useState } from "react";


export default () => {
  const [isMenuShown, setIsMenuShown]= useState(false);
  const [areCategoriesShown, setAreCategoriesShown]= useState(false);

  return  (
   <div>
     <nav className='flex justify-evenly items-center relative z-40 bg-orange-100 border-b-[3px] p-3 border-black mb-8'>
       <div className='h-10 cursor-pointer'>
         <Link href='/'>
           <Image style={{height:"100%", width:"auto"}} src={logo} alt="logo"></Image>
         </Link>
       </div>
       <div className='h-12 w-12 rounded-full border-2 p-0.5 border-black cursor-pointer'>
           <Image style={{height:"100%", width:"auto", borderRadius:"9999px", objectFit:"cover"}} src={penguinImg} alt="user profile image"></Image>
       </div>
       <div className="w-4/12">
          <input placeholder="search ..." className='w-full h-10 bg-amber-50 border-2 border-black placeholder-black px-4 focus:ring-4 ring-orange-400'></input>
       </div>
       <div className='h-10 p-1 cursor-pointer' onClick={()=>setIsMenuShown(!isMenuShown)}>
           <Image style={{height:"100%", width:"auto"}} src={menuIcon} alt="menu icon"></Image>
       </div>
     </nav>
     
    <div data-is-menu-shown={isMenuShown} className="absolute right-0 top-0 w-full h-screen bg-orange-100 z-20 pt-4 max-w-md text-lg data-[is-menu-shown=false]:hidden">
      <ul className="flex flex-col gap-y-6 pt-20 font-bold ">
        <li  data-are-categories-shown={areCategoriesShown} className="px-8 flex flex-wrap group"><span>categories</span> 
            <div className="ml-2 self-center group-data-[are-categories-shown=false]:rotate-[270deg] cursor-pointer" onClick={()=>setAreCategoriesShown(!areCategoriesShown)}>
              <Image src={triangleIcon} alt="triangle icon"/></div>
            <ul className="font-semibold text-base w-full mt-1 group-data-[are-categories-shown=false]:hidden">
              <li className="cursor-pointer px-4 mb-1">category 1</li>             
              <li className="cursor-pointer px-4 mb-1">category 1</li>
              <li className="cursor-pointer px-4 mb-1">category 1</li>
              <li className="cursor-pointer px-4 mb-1">category 1</li>
              <li className="cursor-pointer px-4">category 1</li>
            </ul>
        </li>
        <li className="px-8">top posts</li>
        <li className="px-8">recent posts</li>
        <li className="px-8">about</li>
        <li className="px-8 font-normal border-t-2 border-dashed border-black pt-2">log out</li>
      </ul>
    </div>
  </div> )
}