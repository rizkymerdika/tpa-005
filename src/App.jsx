import './App.css'
import Form from './components/Form'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {
  const [editPage, setEditPage] = useState(false)
  const [editTodo, setEditTodo] = useState('')

  function handleEdit(item){
    setEditPage(true)
    setEditTodo(item)
  }

  function cancelEdit(){
    setEditPage(false)
  }

  return (
    <div className="App">
      <h1>What's the plan for today ?</h1>
      <Form editPage={editPage} editTodo={editTodo} cancelEdit={cancelEdit} />
      <TodoList handleEdit={handleEdit} editPage={editPage} />
    </div>
  )
}

export default App
