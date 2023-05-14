import React, { useEffect } from "react"
import { motion } from "framer-motion"

function LayoutScreen({children, heading, setScreen}) {
  return (
    <motion.div 
    initial={{ opacity: 0, }}
    animate={{ opacity: 1, }}
    transition={{ duration: 0.5 }}
    className="mt-3">
      <h1 className="font-[700] text-5xl mb-10">{heading}</h1>
        {children}
    </motion.div>
  )
}

export default LayoutScreen