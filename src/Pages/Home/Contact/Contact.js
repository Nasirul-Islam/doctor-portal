import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextField from '@mui/material/TextField';
import appointmentBg from '../.../../../../images/appointment-bg.png';

const contactBg = {
    background: `url(${appointmentBg})`,
    // backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(45, 58, 74, .9)',
    backgroundBlendMode: 'darken, luminosity'
}

const Contact = () => {
    return (
        <Box style={contactBg} sx={{ py: 8, my: 5 }}>
            <Container>
                <Typography style={{ color: 'rgb(97, 220, 241)' }} variant="subtitle2" gutterBottom component="div">
                    CONTACT US
                </Typography>
                <Typography sx={{ mb: 8 }} style={{ color: 'white' }} variant="h3" gutterBottom component="div">
                    Always Contact With Us
                </Typography>
                <form>
                    <TextField
                        sx={{ width: '50%' }}
                        style={{ background: 'white' }}
                        id="outlined-size-normal"
                        defaultValue="Email Address"
                    />
                    <br />
                    <TextField
                        sx={{ width: '50%', my: 3 }}
                        style={{ background: 'white' }}
                        id="outlined-size-normal"
                        defaultValue="Subject"
                    />
                    <br />
                    <TextField
                        sx={{ width: '50%', mb: 5 }}
                        style={{ background: 'white' }}
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        defaultValue="Your Message"
                    />
                    <br />
                    <Button
                        sx={{ px: 5 }}
                        style={{ backgroundColor: 'rgb(30 186 177)' }}
                        type="submit"
                        variant="contained">Submit</Button>
                </form>
            </Container>
        </Box>
    );
};

export default Contact;