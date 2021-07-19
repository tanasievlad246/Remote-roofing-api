//TODO: Create types for the redux types

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