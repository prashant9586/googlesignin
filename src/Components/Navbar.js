import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const logoutbtn = () => {
        // localStorage.clear();
        localStorage.setItem("flag", false);
        navigate("/signin");
    }

    // if user logged in dont show login and register page

    const LOGOUT = () => {
        return (
            <>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link active navlink" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link active navlink" aria-current="page">Dashboard</NavLink>
                </li>
                <button onClick={logoutbtn} className='logout_btn btn btn-primary'>Logout</button>
            </>
        )
    }

    // if user logout show login and register page

    const LOGIN = () => {
        return (
            <>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link active navlink" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link active navlink" aria-current="page">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link navlink">Signup</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signin" className="nav-link navlink">Signin</NavLink>
                </li>
            </>
        )
    }

    return (
        <div style={{ backgroundColor: "#e3f2fd" }} >
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }} >
                    <div className="container-fluid">
                        <a style={{ fontSize: "2rem" }} className="navbar-brand" href="#">Prashant</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                            <ul className="navbar-nav ">
                            {
                                localStorage.getItem("flag") === "true" ? <LOGOUT/> : <LOGIN/>
                            }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;