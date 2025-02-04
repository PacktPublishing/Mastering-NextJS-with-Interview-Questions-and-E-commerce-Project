'use client';

import { useState } from "react"

export default function Counter(){
    const [cnt,setCnt] = useState(0);
    console.log("Counter rendered!");

    return(
        <div style={{display:"flex"}}>
            <button style={{width:"4rem"}} onClick={()=>setCnt((val)=>--val)}> - </button>
            <span style={{padding:"1rem"}}>
                {cnt}
            </span>
            <button style={{width:"4rem"}} onClick={()=>setCnt((val)=>++val)}> + </button>
        </div>
    )
}