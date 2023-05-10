import React, { useEffect, useState } from "react"
import Priority_Detail from "./Priority_Details"


function Priorities_List({setActive, setFocusMode, priorities}) {
    
  
    return (
        <div className="">
            {priorities.map((p, index) => <Priority_Detail setFocusMode={() => setFocusMode(p.order) }setActive={() => setActive(index + 1)} key={index} isComplete={p.isComplete} order={index + 1} text={p.text}/>)}
        
        </div>

    )
}

export default Priorities_List