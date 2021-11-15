import { Button, Grid, Rating } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import PurchaseModal from '../Cars/PurchaseModal/PurchaseModal';

const SingleCar = () => {
    const { id } = useParams();

    const [car, setCar] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/cars/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    // Destructuring the object
    const { img, name, ratings, price, description } = car;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <div>
            <Navigation />
            <Box sx={{ padding: 5 }}>
                <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item sm={12} md={6}>
                        <img width="100%" src={img} alt="Car" />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <h1>{name}</h1>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <p>Ratings : {ratings}</p>
                            <p>Price : {price} ৳</p>
                        </Box>
                        <h4>{description}</h4>
                        <Button variant="contained" onClick={handleOpen}>Purchase</Button>
                        <PurchaseModal key={id} open={open} setOpen={setOpen} name={name} />
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div >
    );
};

export default SingleCar;