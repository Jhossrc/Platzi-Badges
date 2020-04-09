import React from 'react'

import './style/Navbar.css'
import logo from '../images/logo.svg'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                <a className="Navbar__brand" href="/">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                    <span className="font-weight-light mr-1">Conference</span>
                    <span className="font-weight-bold">badges</span>
                </a>
                </div>
            </div>
        )
    }
}

export default Navbar;
