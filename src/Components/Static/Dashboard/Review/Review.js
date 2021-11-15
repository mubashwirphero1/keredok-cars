import { Alert, Button, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Review = () => {
    const { user } = useAuth();
    const { displayName, email } = user;

    const [ratings, setRatings] = React.useState(0);
    const [success, setSuccess] = useState(false);

    const [review, setReview] = useState({ name: displayName, email })
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...review, ratings }
        newReviewData[field] = value;
        setReview(newReviewData)
    }
    const handleOnSubmit = e => {
        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(review)
        })
        setSuccess(true);
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <Paper sx={{ p: 5 }}>
                    <h1 style={{ textAlign: "center" }}>Review to our website</h1>
                    <TextField
                        sx={{ width: "75%", m: 2 }}
                        id="standard-basic"
                        label="Your Name"
                        defaultValue={displayName}
                        InputProps={{
                            readOnly: true,
                        }}
                        name="name"
                        variant="standard" />
                    <TextField
                        sx={{ width: "75%", m: 2 }}
                        id="standard-basic"
                        label="Your Email"
                        defaultValue={email}
                        InputProps={{
                            readOnly: true,
                        }}
                        name="email"
                        variant="standard" />
                    <Box>
                        <Typography>Your Ratings</Typography>
                        <Rating
                            name="simple-controlled"
                            value={ratings}
                            onChange={(event, newValue) => {
                                setRatings(newValue);
                            }}
                        />
                    </Box>
                    <TextField
                        sx={{ width: "75%", m: 2 }}
                        id="standard-basic"
                        label="Your Description"
                        multiline
                        name="description"
                        variant="standard"
                        onBlur={handleOnBlur} />
                    <Button variant="contained" sx={{ width: "75%" }} type="submit">Submit</Button>
                    {success && <Alert severity="success">Review added successfully</Alert>}
                </Paper>
            </form>
        </div>
    );
};

export default Review;