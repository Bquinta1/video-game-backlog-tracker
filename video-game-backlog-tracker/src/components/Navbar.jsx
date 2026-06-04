import React from "react";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <a href="/">Video Game Backlog Tracker</a>
            </div>
            <div className="navbar-center">
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar