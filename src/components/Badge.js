import React from 'react';
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div>
                    <img src="https://s.gravatar.com/avatar/571da70bf67d1f13b61a1d34eca4d8ad?s=80" alt="Avatar"/>
                    <h1>José <br/> Robles</h1>
                </div>

                <div>
                    <p>Frontend Engineer</p>
                    <p>@jhossrc10</p>
                </div>

                <div>
                    #platziconf
                </div>
            </div>            
        );
    }
}

export default Badge;