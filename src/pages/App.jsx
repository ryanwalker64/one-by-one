import { useState } from "react"
import { motion } from "framer-motion"

import Priorities_List from "../components/Priorities_List"
import Priority from "../components/Priority"
import NewPriority from "../components/New_Priority"
import MaxPriorities from "../components/Max_Priorities"
import LayoutScreen from "../components/LayoutScreen"
import NewTaskInput from "../components/NewTaskInput"
import FocusScreen from "../components/FocusScreen"




function App() {
  const [screen, setScreen] = useState(0)
  const [priorities, setPriorities] = useState([])
  // const [focusMode, setFocusMode] = useState(null)
  const [activeTask, setActiveTask] = useState(0)

  // const startFocusMode = () => {
  //   const startingPriority = priorities.find(p => !p.isComplete)
  //   setFocusMode(startingPriority.order)
  // }
  const addPriority = (priority) => setPriorities(prev => [...prev, {...priority, order: prev.length + 1}]) 
  const completePriority = () => {
    const adjustedArray = priorities.map(p => p.order === focusMode ? {...p, isComplete: !p.isComplete} : p) 
    setPriorities(adjustedArray)

    const nextPriority = priorities.find(p => !p.isComplete && p.order !== focusMode)
    console.log(nextPriority)

    if(nextPriority) {
      setFocusMode(nextPriority.order)
    } else {
      setFocusMode(null)
    }
      // setTimeout(() => {}, 600)
  }

  // bg-[color:#FFF5EA]

  return (
    <div className="absolute inset-0 bg-black text-white px-8 py-24 flex flex-col justify-end">

     

      <div className="">
      <ol className="list-decimal list-outside pl-9">
      {screen == 4 && priorities.map(p => {
        return (
          <motion.li 
          initial={{ opacity: 0, }}
          animate={{ opacity: 0.5, }}
          transition={{ duration: 0.5 }}
          className="opacity-50 font-[100] text-4xl mb-6" key={p.order}>
            {/* <p className="text-sm font-thin">priority {p.order}</p> */}
            {p.text}
            {/* <p className="text-3xl font-bold">{p.text}</p> */}
          </motion.li>
        )
      })}
      </ol>
        {/* {screen > 0 &&  <span onClick={() => setScreen(prev => prev - 1)} className="text-sm font-thin">go back</span>} */}
        {screen === 0 && 
          <LayoutScreen 
            setScreen={() => setScreen(1)}
            heading="three tasks, one by one.">
            <p onClick={() => setScreen(prev => prev + 1)} className="flex gap-1 font-thin text-xl items-center">let's start
              <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
              </span>
            </p>
          </LayoutScreen>}

          {screen === 1 && 
          <LayoutScreen setScreen={setScreen} heading="what needs to be done?">
            <NewTaskInput 
            placeholder="your first task" 
            addPriority={addPriority}
            setScreen={() => setScreen(prev => prev + 1)}/>
          </LayoutScreen>}

          {screen === 2 && 
          <LayoutScreen setScreen={setScreen} heading="what are you putting off?">
            <NewTaskInput 
            placeholder="your second task" 
            addPriority={addPriority}
            setScreen={() => setScreen(prev => prev + 1)}/>
          </LayoutScreen>}

          {screen === 3 && 
          <LayoutScreen setScreen={setScreen} heading="what would be nice to do?">
            <NewTaskInput 
            placeholder="your second task" 
            addPriority={addPriority}
            setScreen={() => setScreen(prev => prev + 1)}/>
          </LayoutScreen>}

          {screen === 4 && 
          <LayoutScreen setScreen={setScreen} heading="are you ready?">
            <p onClick={() => setScreen('focus')} className="flex gap-1 font-thin text-xl">swipe to start
              <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
              </span>
            </p>
          </LayoutScreen>}

          {screen === 'focus' && 
          <FocusScreen 
          key={priorities[activeTask].order} 
          setScreen={setScreen} 
          task={priorities[activeTask]}/>}
      </div>
    

    </div>
  )
}

export default App
