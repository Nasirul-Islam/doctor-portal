import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`
}

const varticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...varticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smail <br />
                            Starts Here
                        </Typography>
                        <Typography variant="subtitle2" sx={{ my: 3, fontSize: '14px', fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptate repudiandae cumque rerum eum sed labore perferendis ipsum fuga a!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: 'rgb(97, 220, 241)' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={varticalCenter}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;