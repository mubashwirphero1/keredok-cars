import { Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{ px: 4, py: 2, justifyContent: "space-between", alignItems: "center", background: "blue", color: "white", mt: 20 }}>
                <Grid item xs={6} sx={{ flexGrow: 1 }}>
                    <Typography variant="p">
                        &copy; 2020 Ritsboys. All Rights Reserved.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="p" sx={{ textAlign: "right" }}>
                        Read Our Terms And Conditions.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;