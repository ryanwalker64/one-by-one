import React, { useEffect, useState } from "react"
import { motion, useAnimate } from "framer-motion"




function FocusScreen({task, setScreen}) {
    const [complete, setComplete] = useState(false)


    const completed = complete ? {textDecoration: 'line-through'} : {textDecoration: 'none'}


    return (
        <motion.div 
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.5 }}
        className="mt-3 grow flex flex-col">
            {/* <p className="text-sm font-thin mb-2">priority {task.order}</p> */}
            <h1 className="font-[100] text-5xl mb-5 opacity-50 mt-auto">if you only do one thing today.</h1>
            <h1 className="font-[700] text-5xl mb-auto">{task.text}</h1>
            <p onClick="" className="flex gap-1 items-center font-thin text-xl">complete
              <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
              </span>
            </p>
        </motion.div>
    )
}

export default FocusScreen