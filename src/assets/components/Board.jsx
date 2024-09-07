import React from 'react'


const Board = ({task, index, setTaskList, taskList}) => {
    const handleDelete = () => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
    }
  return (
    <>
    <div className="max-w-md rounded-xl flex flex-col items-center 
    justify-start border gap-2 text-center text-lg font-semibold pt-3 pb-4 md:px-6">
      <p>{task}</p>
      <button
      className="bg-red-500 text-white rounded-lg py-1 px-2 mt-4"
      onClick={handleDelete}
      >
        Delete
      </button>
    </div>
    </>
  )
}

export default Board
