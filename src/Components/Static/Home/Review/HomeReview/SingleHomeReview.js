import { Grid, Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const SingleHomeReview = ({ review }) => {
    const { name, ratings, description } = review
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 5 }}>
                <Rating value={ratings} readOnly />
                <br />
                <Typography variant="h5">{description}</Typography>
                <br />
                <Typography variant="p" sx={{ fontWeight: "bold" }}>{name}</Typography>
                <br />
            </Paper>
        </Grid>
    );
};

export default SingleHomeReview;