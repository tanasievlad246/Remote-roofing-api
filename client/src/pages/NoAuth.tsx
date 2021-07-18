import { useState } from "react"
import { Link } from "@material-ui/core";
import Authenticate from "../components/Authenticate";
import { Typography } from "@material-ui/core";
import Register from "../components/Register";

export default function NoAuth(): JSX.Element {
    const [toggle, setToggle] = useState(false);

    const toggleAuth = (event: any, toggle: boolean): void => {
        event.preventDefault();
        setToggle(toggle);
    }

    if (toggle) {
        return <>
            <Register />
            <Typography>If you are already a user <Link component="button" onClick={(e) => toggleAuth(e, false)}>click here</Link></Typography>
        </>
    } else {
        return <>
            <Authenticate />
            <Typography>If you are not registered <Link component="button" onClick={(e) => toggleAuth(e, true)}>click here</Link></Typography>
        </>
    }
}