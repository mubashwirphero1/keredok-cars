import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import SingleReview from './SingleReview/SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Navigation />
            <Typography variant="h3" sx={{ textAlign: "center", m: 3 }}>Our Clients Review</Typography>
            <Grid container spacing={2}>
                {
                    reviews.map(singleReview => <SingleReview key={singleReview.email} review={singleReview} />)
                }
            </Grid>
            <Footer />
        </div>
    );
};

export default Review;