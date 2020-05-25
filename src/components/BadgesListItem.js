import React from 'react'

function BadgesListItem(props) {
    return (
        <div className='jr_badge_container'>
          <img
            className='jr_badge_avatar'
            src={props.badge.avatarUrl}
            alt='Avatar'
          />
          <div className='jr_badge_info'>
            <p className='jr_badge_name'>
              {props.badge.firstName} {props.badge.lastName}
            </p>
            <p className='jr_badge_twitter'>@{props.badge.twitter}</p>
            <p className='jr_badge_jobTitle'>{props.badge.jobTitle}</p>
          </div>
        </div>
      );
}

export default BadgesListItem;