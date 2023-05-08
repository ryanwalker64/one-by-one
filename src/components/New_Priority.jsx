import React, { useEffect, useState } from "react"

function NewPriority({addPriority}) {
    const [input, setInput] = useState('')

    const handleNewPriority = (e) => {
        e.preventDefault()
        const newPriority = {
            text: input, 
            isComplete: false
        }
        addPriority(newPriority)
        setInput('')
    }

    return (
        <form onSubmit={handleNewPriority} className={`bg-white flex  rounded-xl p-4 items-center mb-4 border border-[color:var(--orange)]`}>
                    <input onChange={e => setInput(e.target.value)} value={input} className="text-gray-700 text-sm focus:outline-none" placeholder="Add a priority..."/>
        </form>
    )
}

export default NewPriority