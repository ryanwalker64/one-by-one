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
        <form onSubmit={handleNewPriority} className={`bg-[color:#FDDBB3] flex  rounded-md mb-4 py-2 px-3  items-center `}>
                    <input onChange={e => setInput(e.target.value)} value={input} className="w-full placeholder:text-[color:var(--orange)] bg-[color:#FDDBB3] text-black text-sm focus:outline-none" placeholder="Add a priority..."/>
        </form>
    )
}

export default NewPriority