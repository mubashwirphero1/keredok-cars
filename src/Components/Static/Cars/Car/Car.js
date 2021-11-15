import { Grid, Paper, Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Car = ({ car }) => {
    const { _id, name, img, ratings, price } = car;
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
                    <NavLink to={`/cars/${_id}`} style={{ backgroundColor: "blue", padding: "3%", borderRadius: "6%", color: 'white', textDecoration: "none" }}>Buy Now</NavLink>
                </Box>
            </Paper>
        </Grid>
    );
};

export default Car;