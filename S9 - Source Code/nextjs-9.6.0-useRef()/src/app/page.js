"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  let x = useRef(0);
  const btnRef = useRef();

  useEffect(()=>{
    x.current = x.current + 1;
    console.log("Component rendered.", x.current);
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <h1>Count: {count}</h1>
      <button 
        className="btn" 
        onClick={()=>{
          if(btnRef.current){
            btnRef.current.style.backgroundColor = "black";
          }
        }}
        ref={btnRef}
      >
        Click me
      </button>

    </div>
  );
}
