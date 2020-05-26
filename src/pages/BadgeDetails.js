import React from "react";
import ReactDOM from "react-dom";

import Badge from '../components/Badge';

import {Link} from 'react-router-dom';

function BadgeDetails(props) {

  const logo = "https://static.platzi.com/media/tmp/class-files/git/platzi-badges/platzi-badges-20.DetallesDeUnBadge/src/images/platziconf-logo.svg";
  const badge = props.badge;

  return (
    <div>
      <div className='BadgeDetails__hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={logo} alt='Logo de la Conferencia' />
            </div>
            <div className='col-6 BadgeDetails__hero-attendant-name'>
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className='col'>
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className='btn btn-primary mb-4'
                  to={`/badges/${badge.id}/edit`}>
                  Edit
                </Link>
              </div>
              <div>
                <button className='btn btn-danger'>Delete</button>
                {ReactDOM.createPortal(<h1>Hola, realmente no estoy aquí</h1>, document.getElementById('modal'))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
