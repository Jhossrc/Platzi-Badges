import React from 'react'

import './style/Navbar.css'
import logo from '../images/logo.svg'

import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                <Link className="Navbar__brand" to="/">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                    <span className="font-weight-light mr-1">Conference</span>
                    <span className="font-weight-bold">badges</span>
                </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;
