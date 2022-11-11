import { ADD_TODO, COMPLETE, DELETE, UPDATE } from "../action/todoAction"

const initialState = [
    {
        id: 1,
        title: "Buy Milk",
        completed: false,
    },
    {
        id: 2,
        title: "Buy Egg",
        completed: true,
    },
    {
        id: 3,
        title: "Buy T-Shirt",
        completed: false,
    }
]

function todoReducer(state = initialState, action){
    switch (action.type) {
        case COMPLETE:
            return state.map((item) => {
                if (item.id === action.id) {
                    return{...item, completed: !item.completed}
                }else{
                    return item    
                }
            })
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE:
            const newState = state.filter((item, index) => index != action.index)
            return newState
        case UPDATE:
            const data = action.payload
            const editedArray = []
            state.map((item) => {
                if (item.id === data.id) {
                    item.title = data.title
                    item.completed = false
                }
                editedArray.push(item)
            })
            return editedArray
        default:
            return state
    }
}

export default todoReducer