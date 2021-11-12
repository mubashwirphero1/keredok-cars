import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import React from 'react';
import "./TopBanner.css"
import { InfoRounded } from '@mui/icons-material';

const TopBanner = () => (
    <>
        {/* Top banner */}
        <div className="top-banner">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ alignItems: "center", py: 10, px: 12 }}>
                    <Grid item spacing={{ xs: 12, md: 6, lg: 6 }} sx={{ color: "white" }}>
                        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                            Brave, Strong, and Brave
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: "bold" }} component="div">
                            Turn Your Trip To <br /> Be Fun
                        </Typography>
                        <Typography variant="h6" component="div">
                            This is not a lorem ipsum text. I can't write a description. <br />  So I wrote which is in my mind. So please, don't read this seriously.
                        </Typography>
                    </Grid>
                    <Grid item spacing={{ xs: 12, md: 4, lg: 4 }}>
                        <Paper elevation={3} sx={{ p: 5, textAlign: "center", mb: "-20px" }}>
                            <Typography variant="h6" component="div">
                                How It Works?
                            </Typography>
                            <Typography variant="h4" component="div">
                                Your Adventure is Your Life
                            </Typography>
                            <Typography variant="p" component="div">
                                This is a simple description.
                            </Typography>
                            <Button variant="contained" sx={{ mt: 3 }}><InfoRounded /> Learn More</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </>
);

export default TopBanner;