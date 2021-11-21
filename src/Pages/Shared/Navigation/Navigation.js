import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Container } from '@mui/material';
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: 'inherit', position: 'absolute', top: 0, left: 0, color: 'black' }} sx={{ boxShadow: 0, mt: 3 }}>
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                            Doctor Portal
                        </Typography>
                        {/* Menu part */}
                        <NavLink className="NavLink" to="/appointment">
                            <Button color="inherit">Home</Button>
                        </NavLink>
                        <NavLink className="NavLink" to="/appointment">
                            <Button color="inherit">About</Button>
                        </NavLink>
                        <NavLink className="NavLink" to="/appointment">
                            <Button color="inherit">Appointment</Button>
                        </NavLink>
                        <NavLink className="NavLink" to="/reviews">
                            <Button color="inherit">Reviews</Button>
                        </NavLink>
                        <NavLink className="NavLink" to="/contact">
                            <Button color="inherit">Contact</Button>
                        </NavLink>
                        {
                            user?.email ?
                                <Box>
                                    <NavLink className="NavLink" to="/dashboard">
                                        <Button color="inherit">Dashboard</Button>
                                    </NavLink>
                                    <Button className="NavLink" onClick={logOut} >Logout</Button>
                                </Box>
                                :
                                <NavLink className="NavLink" to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navigation;