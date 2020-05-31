import React, { useState, createContext } from 'react'
import { v4 as uuid } from 'uuid'

export const GlobalContext = createContext()

const GlobalContextProvider = props => {

    const [ input, setInput ] = useState("")
    const [ tasks, setTasks ] = useState([])
    const [ edit, setEdit ] = useState(false)
    const [ selected, setSelected ] = useState(null)

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(!edit){
            if(input) {
            setTasks([...tasks, {input, id: uuid()}])
            setInput("")
            }
        }else {
            changeTasks(input, selected)
            setEdit(false)
        }
    }

    const changeTasks = (input, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { input, id } : task))
        setTasks(newTasks)
        setInput("")
    }

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearTasks = e => {
        e.preventDefault()
        setTasks([])
        setEdit(false)
        setInput("")
    }

    const editTask = id => {
        setEdit(true)
        const item = tasks.find(task => task.id === id)
        setSelected(id)
        setInput(item.input)
    }

    return (
        <GlobalContext.Provider value={{
            input,
            handleChange,
            tasks,
            handleSubmit,
            removeTask,
            clearTasks,
            edit, 
            editTask
          }
        }>

            {props.children}

        </GlobalContext.Provider>

    )
}

export default GlobalContextProvider
