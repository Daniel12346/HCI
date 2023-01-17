"use client"
import { useEffect } from "react";

interface Props{
    code: string;
}
export default ({code}:Props)=>{
    const re = new RegExp("[^a-zA-Z0-9]","g");
    const re1 = new RegExp("[a-zA-Z0-9]","g");
 
    let parsed = code.replaceAll(re, (string)=>`č${string}č`).split("č");  
    const keywords = {
        "JS":["await", "case", "break", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export", "extends", 
            "false", "finally", "for", "function", "interface", "let", "new", "null", "package", "private", "protected", "public","return", "super", "switch", "this", "throw", "try", "true",
            "typeof", "var", "void", "while", "with", "yield"
        ]
    } 

    //TODO: color groups
    const keywordGroups = {
        "JS":{

            
        }
    }

    useEffect(()=>{
        console.log(parsed);});
    return (
    <div className="w-10/12 mb-2 max-sm:w-full" >
            <div className="border-black border-2">
                {/* <div className="p-3 border-black border-2">
                  <pre className="overflow-x-scroll p-2 border-2 border-black ">{code}</pre>
                </div> */}
                <div className="border-black border-2 h-fit p-3"> 
                    <pre className="overflow-x-scroll p-2 border-2 border-black bg-orange-50">
                        {parsed.map(w=><span className={(re1.test(w) && keywords.JS.includes(w) && "text-purple-600") ||
                                re1.test(w) && "text-blue-400" || 
                                ""}>{w}</span>)}
                    </pre>
                </div>  
                <div>
                    <button className="bg-amber-100 p-3">
                        copy
                    </button> 
                </div>
            </div>
            <span className="pl-2 text-slate-600 text-sm">opis koda</span>    
    </div>)
}