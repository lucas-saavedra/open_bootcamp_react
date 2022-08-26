import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "../actions/asyncActions";

//initial state
const initialState = {
    fetching: false,
    token: null,
    error: null,
    logged: false

}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null,
                logged: false,
                token: null
            }
        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                logged: true,
                token: action.payload.token,
                error: null
            }
        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                token: null,
                logged: false,
                error: action.payload.error,
            }
        default:
            return state
    }

}