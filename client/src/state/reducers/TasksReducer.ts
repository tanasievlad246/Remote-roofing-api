const reducer = (state: any, action: any): any => {
    switch (action.type) {
        case "INIT":
            return state + action.payload; // get all tasks that belong to the user into the store
            break;
        case "GET":
            return state + action.payload; // get one task
            break;
        default:
            return state;
            break;
    }
}

export default reducer;