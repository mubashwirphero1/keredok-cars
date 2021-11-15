import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import SingleHomeReview from './HomeReview/SingleHomeReview';

const HomeReview = () => {
    const [review, SetReview] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/homeReview")
            .then(res => res.json())
            .then(data => SetReview(data))
    }, [])

    const history = useHistory();
    const handleOnCLick = () => {
        history.replace("/reviews")
    }
    return (
        <div style={{ marginTop: "5%" }}>
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between", m: 5 }}>
                <Typography variant="h3">Our Clients Review</Typography>
                <Button onClick={handleOnCLick} variant="link">See All Reviews</Button>
            </Box>
            <Grid container spacing={2}>
                {
                    review.map(singleReview => <SingleHomeReview key={singleReview.email} review={singleReview} />)
                }
            </Grid>
        </div>
    );
};

export default HomeReview;