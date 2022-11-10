import './App.css'
import Form from './components/Form'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import TodoList from './components/TodoList'
import DisplayTodos from './components/DisplayTodos'

function App() {
  return (
    <div className="App">
      <h1>What's the plan for today ?</h1>
      <Form/>
      <DisplayTodos/>
    </div>
  )
}

export default App
