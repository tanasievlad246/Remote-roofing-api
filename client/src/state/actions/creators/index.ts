import { Dispatch } from "react";
import { ActionTypes } from "..";
import { Action, Task } from "../../../types";
import Client from "../../../services/Client";
import { AxiosResponse } from "axios";
import Auth from "../../../services/Authenticate";

//TODO: Create actions for tasks, projects and user details, also for filters on tasks projects

export const getTasksAction = () => {
    return async (dispatch: Dispatch<Action>) => {
        const token: string = Auth.getToken().token;
        const response: AxiosResponse = await Client.get('/tasks', token);
        dispatch({
            type: ActionTypes.GET,
            payload: response.data
        });
    }
}