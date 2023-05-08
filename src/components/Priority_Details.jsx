import React, { useEffect } from "react"

function Priority_Detail({isComplete, order, text, setActive}) {


  return (
    <div onClick={setActive} 
        className={`${isComplete ? `bg-[color:#E8E9F2]`: `bg-white`} flex  rounded-xl p-4 items-center mb-4 `}>
          <div className={`${isComplete ? `text-[color:white] bg-[color:var(--orange)]`: `text-[color:var(--orange)] bg-white`} font-bold border border-[color:var(--orange)] mr-3 w-8 h-8 flex items-center justify-center rounded-lg`}>
            <span>{order}</span>
          </div>
          <p className="text-gray-700 text-sm">{text}</p>
    </div>
  )
}

export default Priority_Detail