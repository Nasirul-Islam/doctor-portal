import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.jpg';
import { Button, Typography, Container } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'rgb(9 32 67 / 90%)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: "180px"
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={5}
                        style={{ marginBottom: '-4px' }}>
                        <img
                            style={{ width: 530, marginTop: "-150px" }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={7}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            textAlign: 'left'
                        }}>
                        <Box>
                            <Typography
                                style={{ color: 'rgb(97 220 241)' }}
                                sx={{ fontWeight: 600, my: 2 }} variant="h5">
                                Appoinment
                            </Typography>
                            <Typography variant="h3" style={{ color: 'white' }}>
                                Make an Appoinment <br /> today
                            </Typography>
                            <Typography variant="subtitle2" sx={{ my: 2 }} style={{ color: 'white', fontSize: '16px', fontWeight: 300 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem quisquam totam nobis qui rem amet pariatur. Quia dolorem necessitatibus quae a. Accusamus, quo officia?
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: 'rgb(97, 220, 241)' }}>LEARN MORE</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;