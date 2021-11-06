import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Protection',
        time: '1:00PM - 3:00PM',
        Space: 15
    },
    {
        id: 2,
        name: 'Cosmatic Protection',
        time: '12:00PM - 2:00PM',
        Space: 10
    },
    {
        id: 3,
        name: 'Cavity Protection',
        time: '2:00PM - 4:00PM',
        Space: 5
    },
    {
        id: 4,
        name: 'Teeth Protection',
        time: '4:00PM - 6:00PM',
        Space: 8
    },
    {
        id: 5,
        name: 'Cosmatic Protection',
        time: '6:00PM - 8:00PM',
        Space: 6
    },
    {
        id: 6,
        name: 'Cavity Protection',
        time: '9:00PM - 11:00PM',
        Space: 5
    }
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography
                variant="h4"
                sx={{ color: 'info.main', my: 4 }}>AvailableAppointment {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Booking Successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;