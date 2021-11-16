import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isloding } = useAuth();
    let location = useLocation();
    if (isloding) {
        return <CircularProgress />
    }
    if (!admin) {
        return <CircularProgress />
    }
    if (user?.email && admin) {
        return children;
    }
    return <Navigate to="/home" state={{ from: location }} />;
};

export default AdminRoute;
