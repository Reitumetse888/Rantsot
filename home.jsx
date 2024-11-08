import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file

function Home() {
    return (
        <header>
            <h1>Welcome to Wing's Cafe Inventory System</h1>
            <nav className="main">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">User Management</Link>
                <Link to="/products">Product Management</Link>
            </nav>
        </header>
    );
}

export default Home;
