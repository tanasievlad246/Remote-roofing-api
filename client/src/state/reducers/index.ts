import { combineReducers } from "redux";
import taskReducer from "./TasksReducer"

const reducers = combineReducers({
    task: taskReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;