import React, { useEffect } from "react"
import { motion } from "framer-motion"

function NewTaskScreen({content, setScreen}) {
  return (
    <motion.div className="mt-auto">
      <h1 className="font-[700] text-5xl mb-10">what needs to be done?</h1>
        <p className="flex gap-1 font-thin text-xl">swipe to start
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </span>
        </p>
    </motion.div>
  )
}

export default NewTaskScreen