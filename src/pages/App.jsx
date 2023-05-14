import { useState } from "react"
import { motion } from "framer-motion"

import Priorities_List from "../components/Priorities_List"
import Priority from "../components/Priority"
import NewPriority from "../components/New_Priority"
import MaxPriorities from "../components/Max_Priorities"
import LayoutScreen from "../components/LayoutScreen"
import NewTaskInput from "../components/NewTaskInput"


function App() {
  const [screen, setScreen] = useState(0)
  const [priorities, setPriorities] = useState([])
  const [focusMode, setFocusMode] = useState(null)

  const startFocusMode = () => {
    const startingPriority = priorities.find(p => !p.isComplete)
    setFocusMode(startingPriority.order)
  }
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
    <div className="min-h-screen bg-black text-white px-8 pt-8 pb-14 flex flex-col justify-center">

      {screen == 4 && priorities.map(p => {
        return (
          <motion.div 
          initial={{ opacity: 0, }}
          animate={{ opacity: 0.5, }}
          transition={{ duration: 0.5 }}
          className="opacity-50 mb-4" key={p.order}>
            <p className="text-sm font-thin">priority {p.order}</p>
            <p className="text-3xl font-bold">{p.text}</p>
          </motion.div>
        )
      })}

      <div className="">
        {/* {screen > 0 &&  <span onClick={() => setScreen(prev => prev - 1)} className="text-sm font-thin">go back</span>} */}
        {screen === 0 && 
          <LayoutScreen 
            setScreen={() => setScreen(1)}
            heading="three tasks, one by one.">
            <p onClick={() => setScreen(1)} className="flex gap-1 font-thin text-xl">swipe to start
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
            setScreen={() => setScreen(2)}/>
          </LayoutScreen>}

          {screen === 2 && 
          <LayoutScreen setScreen={setScreen} heading="what are you putting off?">
            <NewTaskInput 
            placeholder="your second task" 
            addPriority={addPriority}
            setScreen={() => setScreen(3)}/>
          </LayoutScreen>}

          {screen === 3 && 
          <LayoutScreen setScreen={setScreen} heading="what would be nice to do?">
            <NewTaskInput 
            placeholder="your second task" 
            addPriority={addPriority}
            setScreen={() => setScreen(4)}/>
          </LayoutScreen>}

          {screen === 4 && 
          <LayoutScreen setScreen={setScreen} heading="are you ready?">
            <p onClick={() => setScreen(1)} className="flex gap-1 font-thin text-xl">swipe to start
              <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
              </span>
            </p>
          </LayoutScreen>}
      </div>

      
 


     {/* {!focusMode && 
      <div className="grow flex flex-col">
        <header className="px-8 pt-8 items-center flex">
          <h1 className="mr-auto">
            <span className="text-3xl font-light">One</span>
            <span className="text-lg font-normal text-[color:var(--orange)]">By</span>
            <span className="text-sm font-normal">One</span>

            </h1>
          {priorities.filter(p => !p.isComplete).length > 0 && 
            <motion.button 
              whileHover={{scale: 1.1}}
              onClick={startFocusMode} 
              className="ml-auto text-white font-light px-5 p-2 bg-gradient-to-bl from-orange-600 to-orange-500 rounded-3xl">
                Focus Mode
            </motion.button>}
        </header>

        <div className="px-8 mt-6">

          {priorities.filter(p => !p.isComplete).length < 3 
                  ? <NewPriority addPriority={addPriority}/>
                  : <MaxPriorities />}

          <Priorities_List  priorities={priorities} setFocusMode={setFocusMode} addPriority={addPriority}/>

        </div>
      </div>} */}

     
        {/* {focusMode && priorities.map(p => {

          if(p.order === focusMode) {
            return (
                <Priority 
                  prioritiesData={priorities}
                  key={p.order}
                  priority={p} 
                  closeView={() => setFocusMode(false)} 
                  completePriority={completePriority}/>
            )}
          }
        )} */}
        


    

    </div>
  )
}

export default App
