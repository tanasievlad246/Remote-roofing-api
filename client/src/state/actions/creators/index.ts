import { Dispatch } from "react";
import { ActionTypes } from "..";
import { Action } from "../../../types";

//TODO: Create actions for tasks, projects and user details, also for filters on tasks projects

export const actionCreatorName = (argument: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.CREATE,
            payload: argument
        });
    }
}