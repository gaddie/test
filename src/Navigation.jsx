import React from "react";
import { Link } from "react-router-dom";


function Navigation() {
    return <nav className="navbar navbar-expand-lg navigation navbar-default" id="naviagtion-bar">
        <div class="container-fluid">
            <h2 className="company-name title">Car Connect </h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="nav">
                    <li className="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a class="nav-link active" href="#">Cars</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Evs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Spares</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
}

export default Navigation;