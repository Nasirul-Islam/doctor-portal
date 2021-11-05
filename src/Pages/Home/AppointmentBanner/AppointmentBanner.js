import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    // backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(45, 58, 74, .7)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: "170px"
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: "-115px" }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="subtitle2" sx={{ mb: 5 }} style={{ color: 'rgb(97, 220, 241)' }}>
                            Appoinment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appoinment today
                        </Typography>
                        <Typography variant="subtitle2" sx={{ my: 5 }} style={{ color: 'white', fontSize: '16px', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem quisquam totam nobis qui rem amet pariatur. Quia dolorem necessitatibus quae a. Accusamus, quo officia?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: 'rgb(97, 220, 241)' }}>LEARN MORE</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;