import React from "react";
import { useState } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import Auth from "../services/Authenticate";

type ProtectedComponent = {
    component: JSX.Element,
    rest: any
}

export default function ProtectedRoute({component: Component, ...rest}:  {component: React.ComponentType<RouteProps>}): JSX.Element {
    const [auth, setAuth] = useState(false);

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