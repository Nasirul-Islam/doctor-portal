import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Review = ({ data }) => {
    const { description, address, img, name } = data;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography sx={{ mb: 8 }} style={{ color: '#b2adad' }} variant="body1" gutterBottom>
                    {description}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <img src={img} alt="" />
                    </Grid>
                    <Grid item xs={8} style={{ textAlign: 'left' }}>
                        <Typography style={{ color: 'rgb(97, 220, 241)' }} variant="subtitle2" gutterBottom component="div">
                            {name}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            {address}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Review;