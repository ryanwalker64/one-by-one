import { useEffect, useState } from "react"
import { motion, useAnimate } from "framer-motion"

import LayoutScreen from "../components/LayoutScreen"
import NewTaskInput from "../components/NewTaskInput"
import FocusScreen from "../components/FocusScreen"
import Priority_Detail from "../components/Priority_Details"


const colors = {
  text: {
      1: 'text-[color:#CF7AE4]',
      2: 'text-[color:#FEE142]',
      3: 'text-[color:#8EEAD2]',
  },
  background: {
      1: '#CF7AE4',
      2: '#FEE142',
      3: '#8EEAD2',
  },
}


function App() {
  const [screen, setScreen] = useState(0)
  const [priorities, setPriorities] = useState([])
  const [activeTask, setActiveTask] = useState(1)
  const [scope, animate] = useAnimate()

  // useEffect(() => {
  //   if(screen === 'focus') {
  //     animate(scope.current, {backgroundColor: b})
  //   }
  // }, [screen])

  const addPriority = (priority) => setPriorities(prev => [...prev, {...priority, order: prev.length + 1}]) 
  const completePriority = () => {
    const adjustedArray = priorities.map(p => p.order === activeTask ? {...p, isComplete: !p.isComplete} : p) 
    setPriorities(adjustedArray)

    // animate(scope.current, {backgroundColor: colors.background[activeTask]})
    
      if(activeTask !== 3) {
        
          setActiveTask(prev => prev + 1)
        } else {
          setScreen('complete')
        }
 
  }
  const reset = () => location.reload() 

  const displayTaskList = () => {
    if (screen === 'complete' || screen === 4)  {
      return priorities.map(p => <Priority_Detail key={p.order} task={p} colors={colors}/>)
    }
  }

  return (
    <div 
    ref={scope}
    className="absolute inset-0 bg-black text-white px-8 py-24 flex flex-col justify-end"
    >

      <div className="">
      <ol className="list-decimal list-outside pl-9">
      {displayTaskList()}
      </ol>
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
          key={priorities.find(p => p.order === activeTask).order}  
          task={priorities.find(p => p.order === activeTask)}
          completePriority={completePriority}
          colors={colors}/>
          }

           {screen === 'complete' && 
          <LayoutScreen setScreen={setScreen} heading="great work">
            <p onClick={reset} className="flex gap-1 font-thin text-xl">
              reset?
              {/* <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
              </span> */}
            </p>
          </LayoutScreen>}
      </div>
    

    </div>
  )
}

export default App
