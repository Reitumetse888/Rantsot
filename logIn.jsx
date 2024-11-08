import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './logIn.css';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        alert('Logging in with: ' + email);
        
        // Navigate to Choose component after login
        navigate('/dashboard'); // Update the path here
    };

    const handleSignUp = () => {
        // Navigate to Sign Up page
        navigate('/registration'); // Consistent path
    };

    return (
        <header className='header'>
           

            <form id="loginForm" onSubmit={handleSubmit}>
                <h2> Login</h2>
              
                <label>Email:</label>
                <input
                    className='two'
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                
                <label>Password:</label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                
                <div className="buttonContainer">
                    <button type="submit">Login</button>
                    <button type="button" onClick={handleSignUp}>Sign Up</button>
                </div>
            </form>
        </header>
    );
}

export default LogIn;
