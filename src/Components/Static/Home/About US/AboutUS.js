import { BookOnline } from '@mui/icons-material';
import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const AboutUS = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{ mt: "2%", alignItems: "center" }}>
                <Grid item sm={12} md={6}>
                    <img width="75%" src="https://i.ibb.co/ZHP738q/Smiling-couple-buying-a-new-auto-at-car-showroom-African-salesman-making-handshake-with-young-man-pu.jpg" alt="About US" border="0" />
                </Grid>
                <Grid item sm={12} md={6}>
                    <Paper elevation={0}>
                        <Typography variant="h6" component="div">
                            About Us
                        </Typography>
                        <Typography variant="h4" component="div">
                            Why Must With Us?
                        </Typography>
                        <Typography variant="h6" component="div">
                            This is a simple About US description
                        </Typography>
                        <Button variant="contained"><BookOnline /> Read More</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default AboutUS;