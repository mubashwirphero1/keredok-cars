import { Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{ px: 4, justifyContent: "space-between", alignItems: "center", background: "blue", color: "white", mt: 20 }}>
                <Grid item xs={12} textAlign="center">
                    <p>&copy; 2020 Ritsboys. All Rights Reserved. Read Our Terms And Conditions.</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;