import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import "./Navigation.css"

const Navigation = () => {
    const history = useHistory();
    const historyFunction = (pushURL) => {
        history.replace(pushURL);
    }
    return (
        <div className="navigation-banner">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ boxShadow: "none", py: "15px" }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, color: "white" }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="img" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink to="/">
                                <img src="https://i.ibb.co/6Fw0KQ2/Navigation-logo.png" alt="Navigation-logo" border="0" />
                            </NavLink>
                        </Typography>
                        <Typography variant="link" component="div" sx={{ flexGrow: 6 }}>
                            <Button variant="text" sx={{ color: 'white' }} onClick={() => { historyFunction("/home") }}>Home</Button>
                            <Button variant="text" sx={{ color: 'white' }} onClick={() => { historyFunction("/cars") }}>Cars</Button>
                        </Typography>
                        <Button variant="contained" onClick={() => { historyFunction("/login") }}>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;