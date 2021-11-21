import { Grid, Box, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, image } = doctor;
    return (
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Box style={{ textAlign: 'center' }}>
                    <img style={{ width: '250px', height: '250px' }}
                        src={`data:image/jpeg;base64,${image}`} alt="" />
                    <Typography
                        sx={{ fontWeight: 500, my: 1 }} variant="h5">
                        {name}
                    </Typography>
                </Box>
            </Grid>
        </>
    );
};

export default Doctor;