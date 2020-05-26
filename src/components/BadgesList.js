import React from 'react';

import { Link } from 'react-router-dom';

import BadgesListItem from '../components/BadgesListItem';

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) =>
      `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className='form-group'>
          <label>Filter Badges</label>
          <input
            type='text'
            className='form-control'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className='btn btn-primary' to='/badges/new'>
          Craete new badge
        </Link>
      </div>
    );
  }

  return (
    <div className='BadgesList'>
      <div className='form-group'>
        <label>Filter Badges</label>
        <input
          type='text'
          className='form-control'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div className='list-unstyled'>
        {filteredBadges.map((badge) => {
          return (
            <Link
              key={badge.id}
              className='text-reset text-text-decoration-none'
              to={`/badges/${badge.id}`}>
              <BadgesListItem badge={badge} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BadgesList;
