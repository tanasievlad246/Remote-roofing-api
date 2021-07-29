//TODO: Create interfaces for the redux actions

import { ActionTypes } from "./state/actions";
import { Action } from "./types";

export interface IDynamicObject {
    [key: string]: string
}

export interface GetAction {
    type: ActionTypes.GET,
    payload: boolean
}

export interface CreateAction {
    type: ActionTypes.CREATE,
    payload: boolean;
}

export interface DeleteAction {
    type: ActionTypes.DELETE,
    payload: boolean
}

export interface UpdateAction {
    type: ActionTypes.UPDATE,
    payload: boolean
}