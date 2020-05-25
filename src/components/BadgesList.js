import React from "react";

import { Link } from "react-router-dom";

import BadgesListItem from "../components/BadgesListItem";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className='btn btn-primary' to='/badges/new'>
            Craete new badge
          </Link>
        </div>
      );
    }

    return (
      <div className='list-unstyled'>
        {this.props.badges.map((badge) => {
          return (
            <Link key={badge.id} className="text-reset text-text-decoration-none" to={`/badges/${badge.id}/edit`}>
              <BadgesListItem badge={badge}/>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default BadgesList;
