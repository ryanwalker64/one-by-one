import React, { useEffect } from "react"

function Priority_Detail({isComplete, order, text, setActive}) {


  return (
    <div onClick={setActive} 
        className={`${isComplete ? `bg-[color:#E8E9F2]`: `bg-white`} flex  rounded-xl p-4 items-center mb-4 `}>
          <div className={`${isComplete ? `text-[color:white] bg-[color:var(--orange)]`: `text-[color:var(--orange)] bg-white`} font-bold border border-[color:var(--orange)] mr-3 w-8 h-8 flex items-center justify-center rounded-lg`}>
            {isComplete 
                ?   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                :   <span>{order}</span>     
            }

          </div>
          <p className="text-gray-700 text-sm">{text}</p>
    </div>
  )
}

export default Priority_Detail