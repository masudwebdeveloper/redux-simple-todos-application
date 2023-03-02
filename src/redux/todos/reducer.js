import {ADDED, TOGGLED} from "./actionTypes";
import initalstate from "./initialstate";

const nextTodoId = (todos) =>{
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;

}
const reducer = (state = initalstate, action) =>{
    switch (action.type) {
        case ADDED:
        return [
            ...state,
            {
                id: nextTodoId(state)
            }
        ]
        case TOGGLED:
            return state.map(todo => {
                if(todo.id !== action.payload){
                    return todo;
                }
                
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })
    
        default:
            return state;
    }

}

export default reducer;