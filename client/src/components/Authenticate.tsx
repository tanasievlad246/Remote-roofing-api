import { useState } from "react"
import Auth from "../services/Authenticate";
import { UserAuthenticationDetails } from "../types";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export default function Authenticate(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (email: string, password: string): Promise<UserAuthenticationDetails> => Auth.login({email, password});

    const dispatch = useDispatch();

    const { actionCreatorName } = bindActionCreators(actionCreators);

    const state = useSelector((state) => state); // returns the state that you want from the store ex state.tasks

    /**
     * TODO: actions
     * <Button onClick={() => actionCreatorName(arguments)} />
     */

    return <div>
        <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}>
            <Typography variant="h2">Log In</Typography>
            <TextField  type="text" name="email" label="Email" onChange={e => setEmail(e.target.value)}/>
            <TextField type="password" name="password" label="Password" onChange={e => setPassword(e.target.value)}/>
            <Button color="primary" variant="contained" onClick={async () => {
               const loginData = await login(email, password);
               console.log(loginData);
            }}>Log In</Button>
        </Grid>
    </div>
}