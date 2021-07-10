import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../services/Authenticate";

export default function ProtectedRoute({component: Component, ...rest}:  any): JSX.Element {
    return (
        <Route
            {...rest}
            render={props => {
                if (Auth.isLoggedIn()) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }}
        />
    )
}