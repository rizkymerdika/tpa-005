import { useState } from "react"
import { useSelector } from "react-redux"
import TodoList from "./TodoList"


function DisplayTodos() {
    const todos = useSelector(state => state)
    const [filter, setFilter] = useState("all")
    
  return (
    <div>
        <div>
            <button className="btn btn-secondary" onClick={() => setFilter("all")}>All</button>
            <button className="btn btn-secondary" onClick={() => setFilter("active")}>Active</button>
            <button className="btn btn-secondary" onClickCapture={() => setFilter("completed")}>Complete</button>
        </div>
        <ul>
            {
                todos.length > 0 && filter === "active" ?
                todos.map((item, index) => {
                    return(
                        item.completed === false && 
                        <TodoList 
                        unique={item.id} 
                        item={item} 
                        check={item.completed} 
                        title={item.title} 
                        index={index}
                        key={item.id} />
                    )
                }) : null
            }
            {
                todos.length > 0 && filter === "completed" ?
                todos.map((item, index) => {
                    return(
                        item.completed === true && 
                        <TodoList 
                        unique={item.id} 
                        item={item} 
                        check={item.completed} 
                        title={item.title} 
                        index={index}
                        key={item.id} />
                    )
                }) : null
            }
            {
                todos.length > 0 && filter === "all" ?
                todos.map((item, index) => {
                    return(
                        <TodoList 
                        unique={item.id} 
                        item={item} 
                        check={item.completed} 
                        title={item.title} 
                        index={index}
                        key={item.id} />
                    )
                }) : null
            }
        </ul>
    </div>
  )
}

export default DisplayTodos