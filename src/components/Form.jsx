import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/action/todoAction"


function Form() {
    const dispatch = useDispatch()
    const [inputTodo, setInputTodo] = useState("")

    function handleSubmit(e) {
        event.preventDefault()
        let randomNumber = Math.random()
        const newTodo = {
            id: randomNumber,
            title: inputTodo,
            completed: false
        }
        setInputTodo("")
        dispatch(addTodo(newTodo))
    }

  return (
    <form className="form-group custom-form" onSubmit={handleSubmit}>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <input type="text" className="form-control" placeholder="What to do ?" required value={inputTodo} onChange={(e) => setInputTodo(event.target.value)} />
                </div>
                <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-md">ADD</button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default Form