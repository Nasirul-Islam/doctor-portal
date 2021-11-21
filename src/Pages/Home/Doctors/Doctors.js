import { Container, Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setdoctors] = useState([]);
    useEffect(() => {
        fetch('https://morning-beach-24256.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setdoctors(data))
    }, [])
    return (
        <Container sx={{ my: 8 }}>
            <Typography
                style={{ color: 'rgb(97 220 241)', textAlign: 'center' }}
                sx={{ fontWeight: 600, my: 8 }} variant="h5">
                Our Doctors
            </Typography>
            <Box>
                <Grid container spacing={2}>
                    {
                        doctors?.map(doctor => <Doctor
                            key={doctor?._id}
                            doctor={doctor}
                        />)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Doctors;