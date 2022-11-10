import { useDispatch, useSelector } from "react-redux"
import {handleComplete, handleDelete} from '../redux/action/todoAction'
import { Icon } from 'react-icons-kit'
import {edit} from 'react-icons-kit/fa/edit'
import {trashO} from 'react-icons-kit/fa/trashO'

function TodoList({unique, item, check, title, index}) {
    const dispatch = useDispatch()
    const todos = useSelector(state => state)
    
  return (
    <>
        <ul>
            <li key={unique}>
                <div>
                    <input type="checkbox" checked={check} onChange={() => dispatch(handleComplete(item))} />
                    <label style={check === true ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{title}</label>
                </div>
                <div>
                    <span><Icon icon={edit} /></span>
                    <span onClick={() => dispatch(handleDelete(index))}><Icon icon={trashO} /></span>
                </div>
            </li>    
        </ul>    
    </>
  )
}

export default TodoList