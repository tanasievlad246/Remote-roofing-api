import { useState } from "react"
import Auth from "../services/Authenticate";

export default function Authenticate() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (email: string, password: string): boolean => Auth.login({email, password});

    return <div>
        <h1>Log In</h1>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
        <button onClick={() => {
            login(email, password);
        }}>Log In</button>
    </div>
}