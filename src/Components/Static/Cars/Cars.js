import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Car from './Car/Car';

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("https://ancient-springs-28186.herokuapp.com/cars")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <Navigation />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ px: 4, my: 4 }}>
                    {
                        cars?.map(car => <Car key={car._id} car={car} />)
                    }
                </Grid>
            </Box>
            <Footer />
        </div>
    );
};

export default Cars;