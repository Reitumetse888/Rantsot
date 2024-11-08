import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css'; 

function Dashboard() {
    return (
        <header>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className="container">
                <aside>
                    <div className="top">
                        <div className="logo">
                            <h2>Wings-<span className="danger">Cafe!</span></h2>
                        </div>
                    </div>
                    <div className="sidebar">
                        <Link to="/dashboard">
                            <span className="material-symbols-outlined">view_cozy</span>
                            <h3>Dashboard</h3>
                        </Link>
                        <Link to="/users" className="active">
                            <span className="material-symbols-outlined">person</span>
                            <h3>Customers</h3>
                        </Link>
                        <Link to="/analytics">
                            <span className="material-symbols-outlined">timeline</span>
                            <h3>Analytics</h3>
                        </Link>
                        <Link to="/messages">
                            <span className="material-symbols-outlined">mail</span>
                            <h3>Messages</h3>
                            <span className="msg_count">14</span>
                        </Link>
                        <Link to="/products">
                            <span className="material-symbols-outlined">receipt_long</span>
                            <h3>Products</h3>
                        </Link>
                        <Link to="/reports">
                            <span className="material-symbols-outlined">report</span>
                            <h3>Report</h3>
                        </Link>
                        <Link to="/settings">
                            <span className="material-symbols-outlined">settings</span>
                            <h3>Settings</h3>
                        </Link>
                        <Link to="/signup">
                            <span className="material-symbols-outlined">add</span>
                            <h3>Add</h3>
                        </Link>
                        <Link to="/"> {/* Change the route to the home page */}
                            <span className="material-symbols-outlined">logout</span>
                            <h3>Logout</h3>
                        </Link>
                    </div>
                </aside>

                <main>
                    <marquee behavior="alternate" direction="right"><h1>Dashboard</h1></marquee>
                    <div className="date">
                        <input type="date" />
                    </div>
                    <div className="insights">
                        <div className="sales">
                            <span className="material-symbols-outlined">trending_up</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Sales</h3>
                                    <h1>M30,000</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle r="30" cy="40" cx="40"></circle>
                                    </svg>
                                    <div className="numbers">80%</div>
                                </div>
                            </div>
                            <small>Last 24 Hours</small>
                        </div>

                        <div className="expenses">
                            <span className="material-symbols-outlined">local_mall</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Expenses</h3>
                                    <h1>M30,000</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle r="30" cy="40" cx="40"></circle>
                                    </svg>
                                    <div className="numbers">80%</div>
                                </div>
                            </div>
                            <small>Last 24 Hours</small>
                        </div>

                        <div className="income">
                            <span className="material-symbols-outlined">stacked_line_chart</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Income</h3>
                                    <h1>M30,000</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle r="30" cy="40" cx="40"></circle>
                                    </svg>
                                    <div className="numbers">80%</div>
                                </div>
                            </div>
                            <small>Last 24 Hours</small>
                        </div>
                    </div>

                    <div className="current-orders">
                        <h1>Recent Orders</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Numbers</th>
                                    <th>Payments</th>
                                    <th>Status</th>
                                    <th>Total Sales</th> {/* New Total Sales Column */}
                                    <th>Total Percentage</th> {/* New Total Percentage Column */}
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Family Meal</td>
                                    <td>450</td>
                                    <td>Due</td>
                                    <td className="warning">Pending</td>
                                    <td>M30,000</td> {/* Example Total Sales */}
                                    <td>80%</td> {/* Example Total Percentage */}
                                    <td className="primary">Details</td>
                                </tr>
                                <tr>
                                    <td>Order for One</td>
                                    <td>50</td>
                                    <td>Due</td>
                                    <td className="warning">Pending</td>
                                    <td>M30,000</td> {/* Example Total Sales */}
                                    <td>80%</td> {/* Example Total Percentage */}
                                    <td className="primary">Details</td>
                                </tr>
                                <tr>
                                    <td>Sunday Plate</td>
                                    <td>45</td>
                                    <td>Due</td>
                                    <td className="warning">Pending</td>
                                    <td>M30 000</td> {/* Example Total Sales */}
                                    <td>80%</td> {/* Example Total Percentage */}
                                    <td className="primary">Details</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </header>
    );
}

export default Dashboard;
