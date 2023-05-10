import React, { useEffect } from "react"

function Priority_Detail({isComplete, order, text, setActive, setFocusMode}) {


  return (
    <div onClick={setFocusMode} 
        className={`${isComplete ? `bg-[color:#E8E9F2]`: `bg-none`} border border-[color:#FFB968] flex  rounded-xl p-1.5 items-center mb-3`}>
          <div className={`${isComplete ? `text-[color:white] bg-[color:var(--orange)]`: `text-black bg-[color:#FDDBB3] text-2xl`} font-bold mr-3 w-12 h-12 flex items-center justify-center rounded-lg`}>
            {isComplete 
                ?   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                :   <span>{order}</span>     
            }

          </div>
          <p className="text-sm">{text}</p>
    </div>
  )
}

export default Priority_Detail