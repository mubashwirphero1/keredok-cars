import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';

const DeleteProducts = () => {
    const [deleteCars, setDeleteCars] = useState([]);
    useEffect(() => {
        fetch("https://ancient-springs-28186.herokuapp.com/cars")
            .then(res => res.json())
            .then(data => setDeleteCars(data))
    }, []);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>DELETE Products</h1>
            {
                deleteCars.map(car => <SingleProduct key={car._id} car={car} />)
            }
        </div>
    );
};

export default DeleteProducts;