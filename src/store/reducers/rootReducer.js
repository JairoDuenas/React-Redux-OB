//
import { combineReducers } from "redux"
import { filterReducer } from "./filterReducer"
import { todosReducer } from "./todosReducer"

export const rootReducer = combineReducers(
  {
    // state name : reducer that will control it 
    todoState: todosReducer,
    filterState: filterReducer
    // ... add more state and reducer to include them in the store
  }
)