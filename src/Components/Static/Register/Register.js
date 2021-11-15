import { Alert, Button, CircularProgress, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, authError, isLoading } = useAuth();
    const history = useHistory()

    if (user) {
        history.replace('/')
    }
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        registerUser(loginData?.name, loginData?.email, loginData?.password);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation />

            <Box sx={{ padding: 5 }}>
                <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item sm={12} md={6}>
                        <img width="100%" src="https://i.ibb.co/mSz8Cmd/mobile-login-concept-illustration-114360-83.jpg" alt="Login" />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                variant="standard"
                                onBlur={handleOnBlur} />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                variant="standard"
                                onBlur={handleOnBlur} />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                variant="standard"
                                onBlur={handleOnBlur} />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already have an account ? Please Login</Button>
                            </NavLink>
                        </form>
                        {authError && <Alert severity="error">{authError}</Alert>}
                        {isLoading && <CircularProgress />}
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </div>
    );
};

export default Register;