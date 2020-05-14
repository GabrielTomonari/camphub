import React from 'react';
import { Link, Router } from 'react-router-dom';
import './nav.css';
import * as ROUTES from '../constants/routes';

const Nav = () => (
    <>
        <div>
            <nav className="navbar navbar-light bg-light">
            <Link to={ROUTES.HOME}><a className="navbar-brand" href="">CAMP <span className="orange-span">hub</span></a></Link>
                <div classname="vl" />
                <h6>A graduação pronta pra te f*</h6>
            </nav>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to={ROUTES.HOME}><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
        </nav>


    </>
)

export default Nav;
