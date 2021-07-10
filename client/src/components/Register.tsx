import { ChangeEvent, useState } from "react";
import Auth from "../services/Authenticate";
import { UserDetails } from "../types";

export default function Register(): JSX.Element {
    const [userDetails, setUserDetails] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    });

    const fillUserDetails = (event: ChangeEvent<HTMLInputElement>): void => {
        const propName: string = event.target.name;
        const prevState: UserDetails = userDetails;
        prevState[propName] = event.target.value;
        setUserDetails(prevState);
    }

    const registerUser = (userDetails: UserDetails): void => {
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
        <label htmlFor="username">Name</label>
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