//TODO: Create types for the redux types

import { CreateAction, DeleteAction, GetAction, PostAction, UpdateAction } from "./interfaces"

export type UserDetails = {
    name: string,
    surname: string,
    email: string,
    password: string,
    [key: string]: string
}

export type UserAuthenticationDetails = {
    token: string,
    id: string,
    expires: string
}

export type Task = {
    id: string,
    name: string,
    description: string,
    score: integer,
    status: string
}

export type Project = {
    id: string,
    name: string,
    description: string,
    score: integer,
    status: string
}

export type User = {
    id: string,
    name: string,
    surname: string,
    email: string
}

export type Action = GetAction | CreateAction | UpdateAction | DeleteAction