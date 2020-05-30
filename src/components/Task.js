import React, { useContext } from 'react'
import { GlobalContext } from '../App'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'


const Task = ({task}) => {

    const globalContext = useContext(GlobalContext)
    const { removeTask, editTask } = globalContext

    return (
        <div className="task">
            {task.input}
            <div className="icons">
                <FaTrashAlt className="icon" onClick={() => removeTask(task.id)}/>
                <FaPencilAlt className="icon" onClick={() => editTask(task.id)}/>
            </div>
        </div>
    )
}

export default Task
