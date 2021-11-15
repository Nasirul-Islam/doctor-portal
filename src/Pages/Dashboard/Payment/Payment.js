import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51Jvw6rLwZbaFyXIWL1ORwnAmi7H9kOq3M4uSUS0VMrLsx45J06ALJAnrmSlffAVQQVpJSO0ZgiTozYLCQifsvNlY00NvtpIAcs');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointments, setAppointments] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay for : {appointmentId}</h2>
            <h2>Please Pay for : {appointments?.serviceName}</h2>
            <h2>Please Pay for : ${appointments?.price}</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointments={appointments}
                />
            </Elements>
        </div>
    );
};

export default Payment;