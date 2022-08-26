// * ID for todos
let initId = 0;

export const actionTypes = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}
/**
 * 
 * @param {string} text 
 * @returns action_TODO
 */
export const addTodo = (text) => {
    return {
        type: actionTypes.ADD_TODO,
        payload: {
            id: initId++,
            text,
            completed: false
        }
    }
}
/**
 * 
 * @param {number} id 
 * @returns action_TODO
 */
export const deleteTodo = (id) => {
    return {
        type: actionTypes.DELETE_TODO,
        payload: {
            id
        }
    }
}
/**
 * 
 * @param {number} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
    return {
        type: actionTypes.TOGGLE_TODO,
        payload: {
            id
        }
    }
}
/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: actionTypes.SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}