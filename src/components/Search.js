import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Search = () => {

    const globalContext = useContext(GlobalContext)
    const { input, handleChange, handleSubmit, clearTasks, edit } = globalContext

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
            className="input"
            type="text"
            value={input}
            placeholder="Add Task..."
            onChange={handleChange}
            ></input>
            <div className="buttons">
                {!edit ? <button onClick={handleSubmit}>Add Item </button> : <button >Edit Item </button>}
                <button onClick={clearTasks}>Clear</button>
            </div>
 

        </form>
    )
}

export default Search
