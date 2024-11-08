import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './welcome.jsx';  // Starting page
import LogIn from './logIn.jsx';
import Home from './home.jsx';
import Dashboard from './dashboard.jsx';
import UserManagement from './userManagement.jsx';
import Product from './product.jsx';
import Signup from './signup.jsx';
import RegistrationForm from './registration.jsx';  // Assuming RegistrationForm is your registration component

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the starting page */}
        <Route path="/" element={<WelcomePage />} />

        {/* Other routes */}
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/products" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/registration" element={<RegistrationForm />} /> {/* This is the correct registration route */}
      </Routes>
    </Router>
  );
}

export default App;
