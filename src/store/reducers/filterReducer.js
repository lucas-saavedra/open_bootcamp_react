import { actionTypes } from "../actions/actions";


let initialState = 'SHOW_ALL';

export const filterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_VISIBILITY_FILTER:
            return (
                payload.filter
            )
        default:
            return state;
    }
}