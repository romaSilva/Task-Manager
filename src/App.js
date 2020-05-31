import React from 'react';
import Search from './components/Search'
import Tasks from './components/Tasks'
import './App.css';
import GlobalContextProvider from './context/GlobalContext';


function App() {
 
  return (
    <GlobalContextProvider>
      <div className="app">
        <h1 className="title">Task Manager</h1>
        <Search />
        <Tasks />
      </div>
    </GlobalContextProvider>
  )
}

export default App;
