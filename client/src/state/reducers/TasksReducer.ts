import { Action, Task } from "../../types";

const reducer = (state = {}, action: Action): any => {
    switch (action.type) {
        case "get":
            return {
                ...state,
                tasks: action.payload
            };
        case "create":
            return action.payload;
        case "post":
            return action.payload;
        case "delete":
            return action.payload;
        default:
            return state;
    }
}

export default reducer;