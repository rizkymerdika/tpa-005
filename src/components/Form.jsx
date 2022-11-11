import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo, handleUpdate } from "../redux/action/todoAction"


function Form({editPage, editTodo, cancelEdit}) {
    const dispatch = useDispatch()
    const [inputTodo, setInputTodo] = useState("")
    const [updateValue, setUpdateValue] = useState("")

    useEffect(() => {
      setUpdateValue(editTodo.title)
    }, [editTodo])
    

    function handleSubmit(e) {
        e.preventDefault()
        let randomNumber = Math.random()
        const newTodo = {
            id: randomNumber,
            title: inputTodo,
            completed: false
        }
        setInputTodo("")
        dispatch(addTodo(newTodo))
    }

    function updateTodo(e){
        e.preventDefault()
        const updateTodo = {
            id: editTodo.id,
            title: updateValue,
            completed: editTodo.completed
        }
        dispatch(handleUpdate(updateTodo))
    }

  return (
    <>
        {editPage === false ? (
            <form className="form-group custom-form" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="input-wrapper">
                                <input type="text" className="form-input" placeholder="What to do ?" required value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-4">
                            <button type="submit" className="btn-add">ADD</button>
                        </div>
                    </div>
                </div>
            </form>
        ):(
            <form className="form-group custom-form" onSubmit={updateTodo}>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="input-wrapper">
                                <input type="text" className="form-input" placeholder="What to update ?" required value={updateValue||""} onChange={(e) => setUpdateValue(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-4">
                            <button type="submit" className="btn-add">UPDATE</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button type="button" className="btn-back" onClick={() => cancelEdit()}>BACK</button>
                        </div>
                    </div>
                </div>
            </form>
        )}
    </>
  )
}

export default Form