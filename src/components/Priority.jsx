import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function Priority({priority, closeView, completePriority, prioritiesData}) {

    const [complete, setComplete] = useState(priority.isComplete)

    const completedTasksLength = () =>  {
      const completedTasks = prioritiesData.filter(p => p.isComplete)
      return `${completedTasks.length}/${prioritiesData.length}`
    }

    const handleCompleteTask = () => {
      setComplete(true)
    }
    

    return (

      <motion.div 
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ duration: 0.5 }}
          exit={{opacity: 0}}
          className={`${complete ? `bg-[color:var(--orange)]` : `bg-white`} transition-colors px-8 pt-8 pb-20 flex flex-col h-screen w-full text-center`}>
        <div onClick={closeView} className="mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke={priority.isComplete ? `white` : `black`} className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          
        </div>

        <div className="my-auto">
          <p className="text-sm text-[color:var(--orange)] mb-5 font-bold">{completedTasksLength()}</p>
          <motion.p 
          className={`${complete ? `text-white` : `text-[color:#333]`} font-black leading-tight text-5xl  mb-auto`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
          >{priority.text}</motion.p>
        </div>
        <button onClick={handleCompleteTask} className={`${complete ? `bg-[color:var(--orange)] text-white` : ``} py-3 rounded-xl text-[color:var(--orange)] border border-[color:var(--orange)]`}>
       
           {complete 
                ?   <motion.svg 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1}}
                      transition={{ duration: 0.5 }}
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="white" className="mx-auto w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </motion.svg>
                :   <span>Complete</span>     
            }
        </button>
      </motion.div>
    )
 
  
}

export default Priority

{/* <div className={`${priority.isComplete ? `bg-[color:var(--orange)]` : `bg-white`} px-8 absolute py-10 flex flex-col h-full w-full top-0 text-center`}>
       
        <div  className="mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke={priority.isComplete ? `white` : `black`} className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          
        </div>

        <div className="my-auto">
          <p className="text-sm text-[color:var(--orange)] mb-5 font-bold">0/3</p>
          <p className={`${priority.isComplete ? `text-white` : `text-[color:#333]`} font-black leading-tight text-5xl  mb-auto`}>{priority.text}</p>
        </div>

        <button  className={`${priority.isComplete ? `bg-[color:var(--orange)] text-white` : ``} py-3 rounded-xl text-[color:var(--orange)] border border-[color:var(--orange)]`}>
           {priority.isComplete 
                ?   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="white" className="mx-auto w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                :   <span>Complete</span>     
            }
        </button>
      </div> */}