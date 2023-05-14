import React, { useEffect } from "react"
import { motion } from "framer-motion"

function LayoutScreen({children, heading, setScreen}) {
  return (
    <motion.div 
    // drag="x"
    // whileDrag={{opacity: 0.5}}
    // dragMomentum={false}
    // dragConstraints={{left: 0, right: 0}}
    // dragElastic={0.8}
    // onDragEnd={(e, info) => {
    //   if(info.offset.x < 50) {
    //     setScreen()
    //   }
    // }}
    initial={{ opacity: 0, }}
    animate={{ opacity: 1, }}
    transition={{ duration: 0.5 }}
    className="">
      <h1 className="font-[700] text-5xl mb-10">{heading}</h1>
        {children}
    </motion.div>
  )
}

export default LayoutScreen