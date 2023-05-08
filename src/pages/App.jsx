import { useState } from "react"
import Priorities_List from "../components/Priorities_List"
import Priority from "../components/Priority"
import NewPriority from "../components/New_Priority"
import MaxPriorities from "../components/Max_Priorities"


function App() {

  const [priorities, setPriorities] = useState([])
  const [active, setActive] = useState(null)

  const addPriority = (priority) => setPriorities(prev => [...prev, {...priority, order: prev.length + 1}]) 
  const completePriority = (priority) => {
    const adjustedArray = priorities.map(p => p.order === active ? {...p, isComplete: !p.isComplete} : p) 
    setPriorities(adjustedArray)
    setTimeout(() => {
      if (priorities.length === active) {
        setActive(null)
      } else if (priorities.length > active ) {
        setActive(active + 1)
      } 
    }, 400)
   


  }

  return (
    <div className="min-h-screen">
      <header className="px-8 pt-8 items-center">
        <h1 className="mr-auto text-xl font-bold">One by One</h1>
      </header>

      <div className="px-8 mt-8">
        <Priorities_List setActive={setActive} priorities={priorities} addPriority={addPriority}/>

        {priorities.filter(p => !p.isComplete).length < 3 
                ? <NewPriority addPriority={addPriority}/>
                : <MaxPriorities />}
      </div>

      {active && <Priority priority={priorities.find(p => p.order === active)} closeView={() => setActive(null)} completePriority={completePriority}/> }
     
      
    </div>
  )
}

export default App
