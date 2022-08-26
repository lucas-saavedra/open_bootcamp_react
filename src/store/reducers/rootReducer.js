import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        //estate name / reducer taht will controll it
        todosState: todosReducer,
        filterState: filterReducer,
        userState: userReducer
    }
)