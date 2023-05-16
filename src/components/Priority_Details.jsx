import React, { useEffect } from "react"
import { motion } from "framer-motion"

function Priority_Detail({task, colors}) {

  return (
    <motion.li 
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ duration: 0.5 }}
          className={`${task.isComplete && `line-through`}
          ${colors.text[task.order]}
          opacity-50 font-[100] text-4xl mb-6`} 
          key={task.order}>
            {/* <p className="text-sm font-thin">priority {p.order}</p> */}
            {task.text}
            {/* <p className="text-3xl font-bold">{p.text}</p> */}
    </motion.li>
  )
}

export default Priority_Detail