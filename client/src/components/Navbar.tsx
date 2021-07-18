import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, AppBar, Toolbar, IconButton, Drawer } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { useState } from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) => createStyles({
    navBarStyle: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display: 'flex',
        flexDirection: 'row'
    },
    linkStyle: {
        float: 'right',
        marginLeft: 'auto',
        width: 35,
        height: 25
    },
    list: {
        width: 250,
        height: '100%',
        background: 'lightgray'
    },
    fullList: {
        width: 'auto',
    },
}));

export default function Navbar(): JSX.Element {
    const classes = useStyles();
    const [drawState, setDrawState] = useState(false);

    return (
        <AppBar position="static">
            <Toolbar className={classes.navBarStyle}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawState(true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer anchor={'left'} open={drawState} onClose={() => setDrawState(false)}>
                    <List className={classes.list}>
                        <ListItem color="link" component={Link} to="/dashboard">
                            <ListItemIcon><InboxIcon></InboxIcon></ListItemIcon>
                            <ListItemText>Dashboard</ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem color="link" component={Link} to="/">
                            <ListItemIcon><InboxIcon></InboxIcon></ListItemIcon>
                            <ListItemText>Tasks</ListItemText>
                        </ListItem>
                        <Divider />
                    </List>
                </Drawer>
                <Typography variant="h6">
                    Project management
                </Typography>
                <Fab color="primary" aria-label="add" className={classes.linkStyle}>
                    <AddIcon />
                </Fab>
            </Toolbar>
        </AppBar>
    );
}