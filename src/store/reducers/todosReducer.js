import { actionTypes } from "../actions/actions";

// initial todoState
let initialState = [];

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return ([
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]
            )
        case actionTypes.TOGGLE_TODO:
            return state.map((todo) => (todo.id === action.payload.id
                ? {
                    ...todo,
                    completed: !todo.completed
                } :
                todo
            ))
        case actionTypes.DELETE_TODO:
            return state.filter((todo) => (
                todo.id !== action.payload.id && todo
            ))

        default:
            return state;
    }
}