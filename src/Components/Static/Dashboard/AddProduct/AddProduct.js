import { Alert, Button, Paper, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddProduct = () => {

    const [ratings, setRatings] = React.useState(0);
    const [success, setSuccess] = useState(false);

    const [cars, setCars] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...cars, ratings }
        newReviewData[field] = value;
        setCars(newReviewData)
    }
    const handleOnSubmit = e => {
        fetch("https://ancient-springs-28186.herokuapp.com/cars/add", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(cars)
        })
        setSuccess(true);
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <Paper sx={{ p: 5 }}>
                    <h1 style={{ textAlign: "center" }}>Add a product</h1>
                    <TextField
                        sx={{ width: "75%", m: 2 }}
                        onBlur={handleOnBlur}
                        id="standard-basic"
                        label="Car Name"
                        name="name"
                        variant="standard" />
                    <TextField
                        sx={{ width: "75%", m: 2 }}
                        onBlur={handleOnBlur}
                        id="standard-basic"
                        label="Price"
                        name="price"
                        variant="standard" />
                    <Box>
                        <Typography>Product Ratings</Typography>
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
                        label="Product Image Link"
                        multiline
                        name="img"
                        variant="standard"
                        onBlur={handleOnBlur} />
                    <TextField
                        sx={{ width: "75%", m: 2 }}
                        id="standard-basic"
                        label="Product Description"
                        multiline
                        name="description"
                        variant="standard"
                        onBlur={handleOnBlur} />
                    <Button variant="contained" sx={{ width: "75%" }} type="submit">Add Product</Button>
                    {success && <Alert severity="success">Product added successfully</Alert>}
                </Paper>
            </form>
        </div>
    );
};

export default AddProduct;