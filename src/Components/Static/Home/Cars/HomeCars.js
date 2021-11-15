import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SingleHomeCars from './SingleCars/SingleHomeCars';

const HomeCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("https://ancient-springs-28186.herokuapp.com/homeCars")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: 'space-between', m: 5 }}>
                <Typography variant="h4">Our top rated cars</Typography>
                <Button variant='text'><NavLink to={`/cars`} style={{ color: 'blue', textDecoration: "none" }}>See all in cars</NavLink></Button>
            </Box>
            <Grid container spacing={2}>
                {
                    cars.map(singleCar => <SingleHomeCars key={singleCar._id} car={singleCar} />)
                }
            </Grid>
        </div>
    );
};

export default HomeCars;