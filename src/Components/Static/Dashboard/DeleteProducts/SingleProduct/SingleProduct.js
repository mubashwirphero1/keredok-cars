import { DeleteForeverRounded } from '@mui/icons-material';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const SingleProduct = ({ car }) => {
    const { name, ratings, price } = car;

    const handleDelete = () => {
        fetch(`https://ancient-springs-28186.herokuapp.com/cars/${name}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => window.location.reload())
    }
    return (
        <div>
            <TableContainer component={Paper} sx={{ my: 5 }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Ratings</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{name}</TableCell>
                            <TableCell>{price}</TableCell>
                            <TableCell>{ratings}</TableCell>
                            <TableCell><Button onClick={handleDelete}><DeleteForeverRounded /></Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default SingleProduct;