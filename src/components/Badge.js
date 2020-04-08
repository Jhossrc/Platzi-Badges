import React from 'react';
import confLogo from '../images/badge-header.svg'
import './style/Badge.css'

class Badge extends React.Component {
    render() {

        const firstName = 'José';
        const lastName = 'Robles';

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar"/>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <p>{this.props.jobTitle}</p>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>            
        );
    }
}

export default Badge;