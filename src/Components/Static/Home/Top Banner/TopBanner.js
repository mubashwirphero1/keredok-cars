import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "./TopBanner.css"

const TopBanner = () => {
    return (
        <>
            {/* Top banner */}
            <div className="top-banner">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} sx={{ alignItems: "center", py: 10, px: 12 }}>
                        <Grid item spacing={{ xs: 12, md: 4 }} sx={{ color: "white" }}>
                            <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                                Brave, Strong, and Brave
                            </Typography>
                            <Typography variant="h1" sx={{ fontWeight: "bold" }} component="div">
                                Turn Your Trip To <br /> Be Fun
                            </Typography>
                            <Typography variant="h5" component="div">
                                This is not a lorem ipsum text. I can't write a description. So I wrote which is in my mind. So please, don't read this seriously.
                            </Typography>
                        </Grid>
                        <Grid item spacing={{ xs: 12, md: 4 }}>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
};

export default TopBanner;