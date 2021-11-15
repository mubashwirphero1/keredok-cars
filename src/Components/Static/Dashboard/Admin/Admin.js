import { Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Admin = () => {
    const [email, setEmail] = useState({});
    const handleOnBlur = e => {
        const email = e.target.value;
        const newEmail = { email }
        setEmail(newEmail);
    }
    const handleOnSubmit = () => {
        fetch("https://ancient-springs-28186.herokuapp.com/user/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <Typography variant="h3" sx={{ textAlign: "center" }}>Make someone admin</Typography>
            <Paper sx={{ p: 5, m: 5 }}>
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        name="email"
                        sx={{ width: "75%" }}
                        onBlur={handleOnBlur} />
                    <Button variant="contained" type="submit" sx={{ width: '75%', mt: 3 }}>Make Admin</Button>
                </form>
            </Paper>

        </div>
    );
};

export default Admin;