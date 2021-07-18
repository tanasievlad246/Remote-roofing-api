import Register from "../components/Register";
import Authenticate from "../components/Authenticate";
import { useState } from "react";

export default function NoUser() {
    const [toggle, setToggle] = useState(false);
    
    if (toggle) {
      return <div>
        <Register />
        <p>Already and user? <button onClick={() => setToggle(false)}>Log in here!</button></p>
      </div>
    } else {
      return <div>
        <Authenticate />
        <p>Not an user yet? <button onClick={() => setToggle(true)}>Register here!</button></p>
      </div>
    }
}