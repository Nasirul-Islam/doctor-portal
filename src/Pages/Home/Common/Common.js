import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import './Common.css';

const Common = () => {

    return (
        <div className="bgcolor">
            <Navigation></Navigation>
            <Banner></Banner>
        </div>
    );
};

export default Common;