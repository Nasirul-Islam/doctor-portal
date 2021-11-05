import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Review from '../Review/Review';
import Grid from '@mui/material/Grid';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const patientReview = [
    {
        id: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati quae repudiandae veniam iusto sapiente culpa numquam delectus enim fugiat.",
        img: people1,
        name: "weston Herry",
        address: "California"
    },
    {
        id: 2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati quae repudiandae veniam iusto sapiente culpa numquam delectus enim fugiat.",
        img: people2,
        name: "weston Herry",
        address: "California"
    },
    {
        id: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati quae repudiandae veniam iusto sapiente culpa numquam delectus enim fugiat.",
        img: people3,
        name: "weston Herry",
        address: "California"
    }
]

const Testimonial = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Box style={{ textAlign: 'left' }}>
                <Typography sx={{ fontWeight: 600 }} style={{ textTransform: 'uppercase', color: 'rgb(97, 220, 241)' }} variant="subtitle2" gutterBottom component="div">
                    Testimonial
                </Typography>
                <Typography sx={{ fontWeight: 500 }} variant="h3" gutterBottom component="div">
                    What's Our Patient <br /> Says
                </Typography>
            </Box>
            <Box sx={{ my: 5 }}>
                <Grid container spacing={4}>
                    {
                        patientReview.map(data => <Review
                            key={data.id}
                            data={data}
                        ></Review>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonial;