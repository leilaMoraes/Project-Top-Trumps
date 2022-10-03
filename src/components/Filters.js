import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const {
      filterName,
      onFilterChange,
      filterRare,
      filterTrunfo,
    } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="filterName"
          disabled={ filterTrunfo }
          value={ filterName }
          onChange={ onFilterChange }
        />
        <select
          data-testid="rare-filter"
          id="rare-filter"
          name="filterRare"
          disabled={ filterTrunfo }
          value={ filterRare }
          onChange={ onFilterChange }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="trunfo-filter">
          <input
            data-testid="trunfo-filter"
            id="trunfo-filter"
            type="checkbox"
            name="filterTrunfo"
            checked={ filterTrunfo }
            onChange={ onFilterChange }
          />
          Super Trunfo
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default Filters;
