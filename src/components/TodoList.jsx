import { useDispatch, useSelector } from "react-redux"
import {handleComplete, handleDelete} from '../redux/action/todoAction'
import { Icon } from 'react-icons-kit'
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit'
import {trashO} from 'react-icons-kit/fa/trashO'
import { useState } from "react"

function TodoList({handleEdit, editPage}) {
    const dispatch = useDispatch()
    const todos = useSelector(state => state)
    const [filter, setFilter] = useState("all")
    
  return (
    <>
        <div className="filter">
            <div className="container btn-filter-container">
                <div>
                    <button className="btn-filter" onClick={() => setFilter("all")}>ALL</button>
                </div>
                <div className="btn-filter-wrapper">
                    <button className="btn-filter" onClick={() => setFilter("active")}>ACTIVE</button>
                </div>
                <div className="btn-filter-wrapper">
                    <button className="btn-filter" onClickCapture={() => setFilter("completed")}>COMPLETED</button>
                </div>
            </div>
        </div>
        <div>
            <div className="container">
            {
                todos.length > 0 && filter === "active" ?
                todos.map((item, index) => {
                    return(
                        item.completed === false && 
                        <div key={item.id} className="list-item">
                            <div className="check-label">
                                {editPage === false && (
                                    <input className="item-check" type="checkbox" checked={item.completed} onChange={() => dispatch(handleComplete(item))} />
                                )}
                                <label className="item-title" style={item.completed === true ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{item.title}</label>
                            </div>
                            <div className="edit-delete">
                                {editPage === false && (
                                    <>
                                        <span className="item-edit-delete" onClick={() => handleEdit(item)}><Icon icon={ic_mode_edit} size={24} /></span>
                                        <span className="item-edit-delete" onClick={() => dispatch(handleDelete(index))}><Icon icon={trashO} size={24} /></span>
                                    </>
                                )}
                            </div>
                        </div>
                    )
                }) : null
            }
            {
                todos.length > 0 && filter === "completed" ?
                todos.map((item, index) => {
                    return(
                        item.completed === true && 
                        <div key={item.id} className="list-item">
                            <div className="check-label">
                                {editPage === false && (
                                    <input className="item-check" type="checkbox" checked={item.completed} onChange={() => dispatch(handleComplete(item))} />
                                )}
                                <label className="item-title" style={item.completed === true ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{item.title}</label>
                            </div>
                            <div className="edit-delete">
                                {editPage === false && (
                                    <>
                                        <span className="item-edit-delete" onClick={() => handleEdit(item)}><Icon icon={ic_mode_edit} size={24} /></span>
                                        <span className="item-edit-delete" onClick={() => dispatch(handleDelete(index))}><Icon icon={trashO} size={24} /></span>
                                    </>
                                )}
                            </div>
                        </div>
                    )
                }) : null
            }
            {
                todos.length > 0 && filter === "all" ?
                todos.map((item, index) => {
                    return(
                        <div key={item.id} className="list-item">
                            <div className="check-label">
                                {editPage === false && (
                                    <input className="item-check" type="checkbox" checked={item.completed} onChange={() => dispatch(handleComplete(item))} />
                                )}
                                <label className="item-title" style={item.completed === true ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{item.title}</label>
                            </div>
                            <div className="edit-delete">
                                {editPage === false && (
                                    <>
                                        <span className="item-edit-delete" onClick={() => handleEdit(item)}><Icon icon={ic_mode_edit} size={24} /></span>
                                        <span className="item-edit-delete" onClick={() => dispatch(handleDelete(index))}><Icon icon={trashO} size={24} /></span>
                                    </>
                                )}
                            </div>
                        </div>
                    )
                }) : null
            }
            </div>
        </div>    
    </>
  )
}

export default TodoList