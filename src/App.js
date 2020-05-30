import React, { useState, createContext } from 'react';
import Search from './components/Search'
import Tasks from './components/Tasks'
import { v4 as uuid } from 'uuid'
import './App.css';

export const GlobalContext = createContext("")

function App() {
  //state
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([])
  const [edit, setEdit] = useState(false)
  const [selected, setSelected] = useState(null)

  //methods
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
      <div className="app">
        <h1 className="title">Task Manager</h1>
        <Search />
        <Tasks />
      </div>
    </GlobalContext.Provider>

  )
}

export default App;
