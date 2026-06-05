import { Link, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar">

            <div className="navbar-title">
                <a href="/">Video Game Backlog Tracker</a>
            </div>

            <div className="navbar-center">
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>

                    {token ? (
                        <>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/stats">Stats</Link></li>
                            <li><Link to="/wheelspin">Wheel spin</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar