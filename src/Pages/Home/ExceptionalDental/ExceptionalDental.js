import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png';
import { Box } from '@mui/system';


// const exceptionalText = {
//     display: 'flex',

// }

const ExceptionalDental = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6}>
                    <img style={{ width: '100%', height: 600 }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}
                    style={{ textAlign: 'left' }}
                    sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ fontWeight: 500 }} variant="h3" gutterBottom component="div">
                            Exceptional Dental <br /> Care, on Your Team
                        </Typography>
                        <Typography sx={{ my: 5 }} style={{ color: '#b2adad' }} variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: 'rgb(97, 220, 241)' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ExceptionalDental;