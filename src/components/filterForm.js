import React from 'react';
import PropTypes from 'prop-types';

const FilterForm = ({ onBreedToFilter }) => (
  <div>
    <input type="text" placeholder="Enter Breed" onChange={onBreedToFilter} />
  </div>

);

FilterForm.propTypes = {
  onBreedToFilter: PropTypes.func,
};

FilterForm.defaultProps = {
  onBreedToFilter: () => {

  },
};

export default FilterForm;
