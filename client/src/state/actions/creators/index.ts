import { Dispatch } from "react";

//TODO: Create actions for tasks, projects and user details, also for filters on tasks projects

export const actionCreatorName = (argument: any): any => {
    return (dispatch: Dispatch<any>): any => {
        dispatch({
            type: "actionType",
            payload: argument
        });
    }
}