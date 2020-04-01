import React from 'react';
import confLogo from '../images/badge-header.svg'
import './style/Badge.css'

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://i.imgur.com/HTBd54R.jpg" alt="Avatar"/>
                    <h1>José <br/> Robles</h1>
                </div>

                <div className="Badge__section-info">
                    <p>Frontend Engineer</p>
                    <p>@jhossrc10</p>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>            
        );
    }
}

export default Badge;