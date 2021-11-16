import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState('');

    const handleSubmiteForm = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        fetch('https://morning-beach-24256.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctors successfully added');
                    console.log(data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h2>Add a Doctor</h2>
            <form onSubmit={handleSubmiteForm}>
                <TextField
                    sx={{ width: '50%', mb: 3 }}
                    label="Name"
                    required
                    onChange={e => (setName(e.target.value))}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type='email'
                    required
                    onChange={e => (setEmail(e.target.value))}
                    variant="standard" />
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])} />
                <br />
                <Button variant="contained" type="submit">
                    Upload
                </Button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default AddDoctor;