import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Protection',
        time: '11:00AM - 12:00PM',
        Space: 15
    },
    {
        id: 2,
        name: 'Cosmatic Protection',
        time: '11:00AM - 12:00PM',
        Space: 10
    },
    {
        id: 3,
        name: 'Cavity Protection',
        time: '11:00AM - 12:00PM',
        Space: 5
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11:00AM - 12:00PM',
        Space: 8
    },
    {
        id: 5,
        name: 'Cavity Protection',
        time: '11:00AM - 12:00PM',
        Space: 6
    },
    {
        id: 6,
        name: 'Cavity Protection',
        time: '11:00AM - 12:00PM',
        Space: 5
    }
]

const AvailableAppointment = ({ date }) => {
    return (
        <Container>
            <Typography
                variant="h4"
                sx={{ color: 'info.main', my: 4 }}>AvailableAppointment {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;