import React from "react";
import './Header.css';
import DemandTrackerlogo from '../../img/AppLogo.png';// importing image from img folder
import Dehaze from '../../img/dehaze.svg'; // importing image from img folder
import { Link, NavLink, useHistory } from "react-router-dom";

export default function Header() {
    const history = useHistory();
    const goToLogin = () => {
        history.push('/')
    }
    const goToHome = () => {
        history.push('/reqlist')
    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-light navbar-light navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={DemandTrackerlogo} alt="Logo" width="85" height="40" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"><i className="fas fa-user"></i>&nbsp;Welcome Guest</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"><i className="fas fa-home" onClick={goToHome}></i>&nbsp;Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" ><i className="fas fa-sign-out-alt" onClick={goToLogin}></i>&nbsp;Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}