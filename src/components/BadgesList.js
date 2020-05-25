import React from "react";

import { Link } from "react-router-dom";

class BadgesList extends React.Component {
  render() {

    if (this.props.badges.length === 0) {
        return(
            <div>
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Craete new badge
                </Link>
            </div>
        )
    }

    return (
      <div className='list-unstyled'>
        {this.props.badges.map((badge) => {
          return (
            <div key={badge.id} className='jr_badge_container'>
              <img
                className='jr_badge_avatar'
                src={badge.avatarUrl}
                alt='Avatar'
              />
              <div className='jr_badge_info'>
                <p className='jr_badge_name'>
                  {badge.firstName} {badge.lastName}
                </p>
                <p className='jr_badge_twitter'>@{badge.twitter}</p>
                <p className='jr_badge_jobTitle'>{badge.jobTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BadgesList;