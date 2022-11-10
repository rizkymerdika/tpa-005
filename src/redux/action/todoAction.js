export const COMPLETE = 'COMPLETE'
export const ADD_TODO = 'ADD_TODO'
export const DELETE = 'DELETE'

export function handleComplete(item){
    return {
        type: COMPLETE,
        id: item.id
    }
}

export function addTodo(newTodo){
    return{
        type: ADD_TODO,
        payload: newTodo
    }
}

export function handleDelete(index){
    return{
        type: DELETE,
        index
    }
}