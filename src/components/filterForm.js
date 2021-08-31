import React from 'react';
import PropTypes from 'prop-types';

const FilterForm = ({ onCBreedToFilter }) => (
  <div>
    <input type="text" placeholder="Enter Breed" onChange={onCBreedToFilter} />
  </div>

);

FilterForm.propTypes = {
  onCBreedToFilter: PropTypes.func,
};

FilterForm.defaultProps = {
  onCBreedToFilter: () => {

  },
};

export default FilterForm;
