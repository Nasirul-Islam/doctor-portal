import { Container, Grid } from '@mui/material';
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
        <div>
            <h1>Our Doctors {doctors?.length}</h1>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors?.map(doctor => <Doctor
                            key={doctor?._id}
                            doctor={doctor}
                        />)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;