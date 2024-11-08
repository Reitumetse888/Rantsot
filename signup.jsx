// Signup.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signUp.css';

function Signup() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const contactNumber = event.target.contactNumber.value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert("User already exists with this email. Please login.");
            return; 
        }

        const newUser = { firstName, lastName, email, contactNumber };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        navigate('/users'); 
    };

    const handleLoginRedirect = () => {
        navigate('/logIn'); 
    };

    const handleHomeRedirect = () => {
        navigate('/'); // Adjust the path as needed for your home route
    };

    return (
        <div>
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <div className='one'>
                    <label>First Name:</label>
                    <input type="text" name="firstName" required />
                </div>
                <div className='two2'>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" required />
                </div>
                <div className='three'>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div className='four'>
                    <label>Contact Number:</label>
                    <input type="text" name="contactNumber" required />
                </div>
                <button className='btn1' type="submit">Add User</button>
                <button className='btn2' type="button" onClick={handleHomeRedirect} style={{ marginLeft: '10px' }}>Home</button>
            </form>
        </div>
    );
}

export default Signup;
