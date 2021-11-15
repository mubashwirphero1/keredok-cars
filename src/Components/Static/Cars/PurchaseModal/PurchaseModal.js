import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useAuth from '../../../../Hooks/useAuth';
import { Button, TextField } from '@mui/material';

const PurchaseModal = ({ open, setOpen, name }) => {
    const { user } = useAuth();
    const { email, displayName } = user;
    console.log(name);


    const [purchaseData, setPurchaseData] = useState({ email, displayName });
    console.log(purchaseData);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newPurchaseData = { ...purchaseData, name };
        newPurchaseData[field] = value;
        setPurchaseData(newPurchaseData);
    }

    const handleOnSubmit = (e) => {
        fetch('https://ancient-springs-28186.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(purchaseData)
        })
            .then((res) => {
            })
        e.preventDefault();
        setOpen(false)

    }

    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1>{name}</h1>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            defaultValue={email}
                            InputProps={{
                                readOnly: true,
                            }}
                            name="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            defaultValue={displayName}
                            InputProps={{
                                readOnly: true,
                            }}
                            name="name"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Phone"
                            name="phone"
                            variant="standard"
                            onBlur={handleOnBlur} />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Address"
                            name="address"
                            variant="standard"
                            onBlur={handleOnBlur} />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default PurchaseModal;