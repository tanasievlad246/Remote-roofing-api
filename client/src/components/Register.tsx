import { ChangeEvent, useState } from "react";
import { IDynamicObject } from "../interfaces";
import Auth from "../services/Authenticate";

export default function Register() {
    const [userDetails, setUserDetails] = useState({});

    const fillUserDetails = (event: ChangeEvent<HTMLInputElement>): void => {
        const propName: string = event.target.name;
        const prevState: IDynamicObject = userDetails;
        prevState[propName] = event.target.value;
        setUserDetails(prevState);
    }

    const registerUser = (userDetails: any): void => {
        Auth.register(userDetails)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return <div>
        <h1>Register</h1>
        <label htmlFor="username">Username</label>
        <input type="text" name="name" onChange={e => fillUserDetails(e)}/>
        <label htmlFor="username">Surname</label>
        <input type="text" name="surname" onChange={e => fillUserDetails(e)}/>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" onChange={e => fillUserDetails(e)}/>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={e => fillUserDetails(e)}/>
        <button onClick={() => registerUser(userDetails)}>Register</button>
    </div>
}