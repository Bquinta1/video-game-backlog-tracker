import React from "react";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <h1>Video Game Backlog Tracker</h1>
            </div>
            <div className="navbar-links">
                <a href="/">Home</a>
                <a href="/dashboard">Dashboard</a>
            </div>
        </nav>
    );
}

export default Navbar