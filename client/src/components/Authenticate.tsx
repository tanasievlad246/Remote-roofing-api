import { useState } from "react"
import Auth from "../services/Authenticate";
import { UserAuthenticationDetails } from "../types";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { Box } from "@material-ui/core";

export default function Authenticate(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (email: string, password: string): Promise<UserAuthenticationDetails> => Auth.login({email, password});

    return <Grid item>
        <Box>
            <Typography variant="h2">Log In</Typography>
        </Box>
        <Box mt={5}>
            <Grid>
                <TextField  type="text" name="email" label="Email" onChange={e => setEmail(e.target.value)}/>
            </Grid>
            <Grid item xs={12}>
                <TextField type="password" name="password" label="Password" onChange={e => setPassword(e.target.value)}/>
            </Grid>
        </Box>
        <Box mt={5} mb={5}>
            <Button color="primary" variant="contained" onClick={async () => {
                const loginData = await login(email, password);
                console.log(loginData);
            }}>Log In</Button>
        </Box>
    </Grid>
}