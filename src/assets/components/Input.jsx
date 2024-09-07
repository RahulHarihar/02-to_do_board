import React from 'react'
import { useState } from 'react'


const Input = ({taskList, setTaskList}) => {
    const [input, setInput] = useState("")

    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, input]);
        setInput("");
    }

  return (
    <form className="flex flex-row items-center gap-3">
        <input 
        className="border rounded-lg py-1.5 px-2.5 text-lg"
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        >
        </input>
      
        <button
        className="bg-teal-500 text-white rounded px-2 py-2 font-semibold hover:opacity-70"
            onClick={handleAddTask}>
            Add
        </button>

    </form>
  )
}

export default Input
