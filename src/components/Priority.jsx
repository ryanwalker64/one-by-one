import React, { useEffect } from "react"

function Priority({priority, closeView, completePriority}) {

    return (
      <div className="bg-white px-8 absolute py-10 flex flex-col h-full w-full top-0 text-center">
        <div onClick={closeView} className="mx-auto opacity-50 hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="black" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          
        </div>

        <div className="my-auto">
          <p className="text-sm text-[color:var(--orange)] mb-5 font-bold">0/3</p>
          <p className="font-black leading-tight text-5xl text-[color:#333] mb-auto">{priority.text}</p>
        </div>
        <button onClick={completePriority} className={`${priority.isComplete ? `bg-[color:var(--orange)] text-white` : ``} py-3 rounded-xl text-[color:var(--orange)] border border-[color:var(--orange)]`}>Complete</button>
      </div>
    )
 
  
}

export default Priority