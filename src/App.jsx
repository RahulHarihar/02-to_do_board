import Input from './assets/components/Input'
import Board from './assets/components/Board';
import './App.css'
import { useState } from 'react'

function App() {
  const [taskList, setTaskList] = useState([]);
  

  return (
    <>
    <div className="px-12">
    <div className="flex flex-col items-center justify-center py-10 gap-6">
      <h1 className="font-mono font-semibold text-xl">02- To Do Board Using React and Basic Tailwind</h1>
      <Input taskList={taskList} setTaskList={setTaskList}/>
      </div>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
        {taskList.map((task, index) => 
        <Board
          key={index}
          task={task}
          index={index}
          setTaskList={setTaskList}
          taskList={taskList}
        
        />
        )}
      </div>
      </div>
    </>
  )
}

export default App
