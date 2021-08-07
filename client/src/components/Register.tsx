import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, TextareaHTMLAttributes, useState } from "react";
import Auth from "../services/Authenticate";
import { UserDetails } from "../types";
import { Box } from "@material-ui/core";

export default function Register(): JSX.Element {
    const [userDetails, setUserDetails] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    });

    const fillUserDetails = (event: ChangeEvent<any>): void => {
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

    return <Grid item>
        <Box mt={3} mb={3}>
            <Typography variant="h2">Register</Typography>
        </Box>
        <Box mb={3}>
            <Box>
                <TextField label="Name" type="text" name="name" onChange={e => fillUserDetails(e)}/>
            </Box>
            <Box>
                <TextField label="Surname" type="text" name="surname" onChange={e => fillUserDetails(e)}/>
            </Box>
            <Box>
                <TextField label="Password" type="text" name="password" onChange={e => fillUserDetails(e)}/>
            </Box>
            <Box>
                <TextField label="Email" type="text" name="email" onChange={e => fillUserDetails(e)}/>
            </Box>
        </Box>
        
        <Button color="primary" variant="contained" onClick={() => registerUser(userDetails)}>Register</Button>
    </Grid>
}