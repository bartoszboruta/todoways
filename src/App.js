import React from 'react'

import Todos from './components/Todo/List'
import CreateTodo from './components/Todo/Create'

function App() {
  return (
    <div className="App">
      <CreateTodo />
      <Todos />
    </div>
  )
}

export default App
