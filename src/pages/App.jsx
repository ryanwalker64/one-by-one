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
    <div className="min-h-screen flex flex-col">
     {!focusMode && 
      <div className="grow flex flex-col">
        <header className="px-8 pt-8 items-center">
          <h1 className="mr-auto text-xl font-bold">One by One</h1>
        </header>

        <div className="px-8 mt-8 flex flex-col grow">
          <Priorities_List  priorities={priorities} setFocusMode={setFocusMode} addPriority={addPriority}/>

          {priorities.filter(p => !p.isComplete).length < 3 
                  ? <NewPriority addPriority={addPriority}/>
                  : <MaxPriorities />}
          {priorities.filter(p => !p.isComplete).length > 0 && <button onClick={startFocusMode} className="mt-auto mb-8 text-white w-full p-3 bg-[color:var(--orange)] rounded-xl">Start</button>}
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
