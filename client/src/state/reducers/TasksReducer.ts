import { Action, Task } from "../../types";

const reducer = (state: Task[] = [], action: Action): any => {
    switch (action.type) {
        case "get":
            return [...state, action.payload];
        case "create":
            return [...state, action.payload];
        default:
            return state;
    }
}

export default reducer;