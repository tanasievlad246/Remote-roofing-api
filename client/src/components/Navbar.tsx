import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from "@material-ui/core";

export default function Navbar() {
    return (
        <Box component="nav">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
        </Box>
    );
}