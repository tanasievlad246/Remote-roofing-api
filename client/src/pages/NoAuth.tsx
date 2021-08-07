import React, { useState } from "react"
import { Grid, Link } from "@material-ui/core";
import Authenticate from "../components/Authenticate";
import { Typography } from "@material-ui/core";
import Register from "../components/Register";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
})

export default function NoAuth(): JSX.Element {
    const [toggle, setToggle] = useState(false);

    const toggleAuth = (event: any, toggle: boolean): void => {
        event.preventDefault();
        setToggle(toggle);
    }

    const classes = useStyles();

    if (toggle) {
        return <div className={classes.root}> 
            <Grid
                container
                direction="column"
                alignItems="center"
            >
                <Register />
                <Typography>If you are already a user <Link component="button" onClick={(e) => toggleAuth(e, false)}>click here</Link></Typography>
            </Grid>
        </div>
    } else {
        return <Grid
            container
            direction="column"
            alignItems="center"
            spacing={0}
        >
            <Authenticate />
            <Typography>If you are not registered <Link component="button" onClick={(e) => toggleAuth(e, true)}>click here</Link></Typography>
        </Grid>
    }
}