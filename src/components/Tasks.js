import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Task from './Task'


const Tasks = () => {

    const { tasks } = useContext(GlobalContext)

    if(tasks.length) {
        return (
            <div className="tasks">
                {tasks.map(task => <Task key={task.id} task={task} />)}
            </div>
        )
    }else {
        return(
            <div className="tasks" />
        ) 
    }

}

export default Tasks
