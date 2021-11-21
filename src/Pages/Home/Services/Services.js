import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: "Fluoride Treatment",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis laudantium porro doloremque! In, necessitatibus non earum perferendis sint consectetur odio expedita, enim molestiae, hic distinctio inventore iure impedit sed perspiciatis?",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis laudantium porro doloremque! In, necessitatibus non earum perferendis sint consectetur odio expedita, enim molestiae, hic distinctio inventore iure impedit sed perspiciatis?",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis laudantium porro doloremque! In, necessitatibus non earum perferendis sint consectetur odio expedita, enim molestiae, hic distinctio inventore iure impedit sed perspiciatis?",
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        style={{ color: 'rgb(97 220 241)' }}
                        sx={{ fontWeight: 600, m: 3 }} variant="h5">
                        OUR SERVICES
                    </Typography>
                    <Typography sx={{ fontWeight: 500, mb: 8 }} variant="h3">
                        Services We Provide
                    </Typography>
                </Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map(service => <Service
                        key={service.name}
                        service={service}
                    ></Service>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;