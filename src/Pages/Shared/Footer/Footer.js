import { Container, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <>
            <Container sx={{ my: 8 }}>
                <Grid container spacing={4} style={{ textAlign: 'left', color: 'gray' }}>
                    <Grid item xs={3}>
                        <Typography sx={{ mt: 8 }} variant="subtitle2" gutterBottom component="div">
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Check up
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Treatment of patient diseases
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Tooth extraction
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Check up
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{ mb: 5, fontWeight: 600 }}
                            style={{ color: 'rgb(30 227 234)' }}
                            variant="h5" gutterBottom component="div">
                            Services
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Check up
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Treatment of patient diseases
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Tooth extraction
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Check up
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Check up
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Check up
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{ mb: 5, fontWeight: 600 }}
                            style={{ color: 'rgb(30 227 234)' }}
                            variant="h5" gutterBottom component="div">
                            Oral Health
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Check up
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Treatment of patient diseases
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Tooth extraction
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Check up
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Check up
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Check up
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{ mb: 5, fontWeight: 600 }}
                            style={{ color: 'rgb(30 227 234)' }}
                            variant="h5" gutterBottom component="div">
                            Our Address
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            New Yark - 101010  Hudson Yards
                        </Typography>
                        <Typography sx={{ mt: 5 }} variant="subtitle2" gutterBottom component="div">
                            Call Now
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: 'rgb(97, 220, 241)' }}>+2020202525225</Button>
                    </Grid>
                </Grid >
            </Container >
            <Box sx={{ my: 5 }} style={{ color: 'gray' }}>
                <Typography variant="subtitle2" gutterBottom component="div">
                    Copyright 2021 All Right Reserved
                </Typography>
            </Box>
        </>
    );
};

export default Footer;