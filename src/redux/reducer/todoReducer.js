import { ADD_TODO, COMPLETE, DELETE } from "../action/todoAction"

const initialState = [
    {
        id: 1,
        title: "Todo 1",
        completed: false,
    },
    {
        id: 2,
        title: "Todo 2",
        completed: true,
    },
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
        default:
            return state
    }
}

export default todoReducer