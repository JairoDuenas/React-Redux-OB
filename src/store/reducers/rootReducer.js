//
import { combineReducers } from "redux"
import { userReducer } from "./userReducer"

export const rootReducer = combineReducers(
  {
    // state name : reducer that will control it 
    // todoState: todosReducer,
    // filterState: filterReducer,
    // Async example (Login User)
    userState: userReducer
    // ... add more state and reducer to include them in the store
  }
)