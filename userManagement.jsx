// User.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    const editUser = (index) => {
        const user = users[index];

        const firstName = prompt("Enter new First Name:", user.firstName);
        const lastName = prompt("Enter new Last Name:", user.lastName);
        const email = prompt("Enter new Email:", user.email);
        const contactNumber = prompt("Enter new Contact Number:", user.contactNumber);

        if (firstName && lastName && email && contactNumber) {
            const updatedUsers = [...users];
            updatedUsers[index] = { firstName, lastName, email, contactNumber };
            setUsers(updatedUsers);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
        }
    };

    const deleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    return (
        <header>
            <div className="nav">
                <h1>User Information:</h1>
                <Link to="/signup" className="addUsers">Add New Users</Link>
            </div>
            <Link to="/" className="homePageButton">HomePage</Link>
            <table className="table1">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.contactNumber}</td>
                            <td>
                                <button onClick={() => editUser(index)}>Edit</button>
                                <button onClick={() => deleteUser(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </header>
    );
}

export default User;
