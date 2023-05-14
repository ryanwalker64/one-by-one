import React, { useEffect, useState } from "react"

function NewTaskInput({placeholder, addPriority, setScreen}) {
    const [input, setInput] = useState('')

    const handleNewTask = (e) => {
        e.preventDefault()
        const task = {
            text: input, 
            isComplete: false
        }
        addPriority(task)
        setInput('')
        setScreen() 
    }

    return (
        <form onSubmit={handleNewTask}>
            <input 
            placeholder={placeholder}
            className="bg-black w-full border-b  border-gray-500 pb-2 outline-none focus:border-white"
            value={input}
            onChange={e => setInput(e.target.value)}
            autoFocus
            />
        </form>
    )
}

export default NewTaskInput