import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  task: taskReducer,
  counter: counterReducer,
  user: userReducer
})

export default rootReducer