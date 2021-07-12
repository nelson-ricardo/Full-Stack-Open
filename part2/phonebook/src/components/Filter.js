import React from 'react';

const Filter = ({handleSearchChange, search}) => {
    return (
      <div>
        <label htmlFor="filter">Filter</label>
        <input
          type="text"
          id="filter"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
    );
}

export default Filter;