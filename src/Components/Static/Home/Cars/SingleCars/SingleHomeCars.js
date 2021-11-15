import { Grid, Paper, Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleHomeCars = ({ car }) => {
    const { img, name, price, ratings } = car;
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ py: 10 }}>
                <img width="100%" height="250px" src={img} alt="Hello Image" />
                <Box sx={{ padding: 2 }}>
                    <h1 style={{ textAlign: "center" }}>{name}</h1>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                        <Rating readOnly value={ratings} />
                        <p>Price : {price} ৳</p>
                    </Box>
                    <NavLink to={`/cars`} style={{ backgroundColor: "blue", padding: "3%", borderRadius: "6%", color: 'white', textDecoration: "none" }}>See in cars</NavLink>
                </Box>
            </Paper>
        </Grid>
    );
};

export default SingleHomeCars;