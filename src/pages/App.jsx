import { useState } from "react"
import Priorities_List from "../components/Priorities_List"
import Priority from "../components/Priority"
import NewPriority from "../components/New_Priority"
import MaxPriorities from "../components/Max_Priorities"


function App() {

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

  

  return (
    <div className="min-h-screen bg-[color:#FFF5EA]">
     {!focusMode && 
      <div className="grow flex flex-col">
        <header className="px-8 pt-8 items-center flex">
          <h1 className="mr-auto">
            <span className="text-3xl font-light">One</span>
            <span className="text-lg font-normal text-[color:var(--orange)]">By</span>
            <span className="text-sm font-normal">One</span>

            </h1>
          {priorities.filter(p => !p.isComplete).length > 0 && <button onClick={startFocusMode} className="ml-auto text-white font-light px-5 p-2 bg-gradient-to-bl from-orange-600 to-orange-500 rounded-3xl">Focus Mode</button>}
        </header>

        <div className="px-8 mt-6">

          {priorities.filter(p => !p.isComplete).length < 3 
                  ? <NewPriority addPriority={addPriority}/>
                  : <MaxPriorities />}

          <Priorities_List  priorities={priorities} setFocusMode={setFocusMode} addPriority={addPriority}/>

        </div>
      </div>}

      {/* {active && <Priority priority={priorities.find(p => p.order === active)} closeView={() => setActive(null)} completePriority={completePriority}/> } */}
     
        {focusMode && priorities.map(p => {

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
        )}
        


    

    </div>
  )
}

export default App
