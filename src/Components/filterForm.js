import React from 'react';
import PropTypes from 'prop-types';
import '../styles/filterForm.css';

const FilterForm = ({ onBreedToFilter, allBreeds }) => {
  const options = allBreeds.map((breed) => (
    <option value={breed.id} key={breed.id}>
      {breed.name}
    </option>
  ));

  return (
    <div className="searchWrapper d-flex  justify-content-center">
      <select className="searchBar text-center " onChange={onBreedToFilter} key={allBreeds.id}>
        {options}
      </select>
    </div>
  );
};

FilterForm.propTypes = {
  onBreedToFilter: PropTypes.func,
  allBreeds: PropTypes.arrayOf.isRequired,
};

FilterForm.defaultProps = {
  onBreedToFilter: () => {
  },
};
export default FilterForm;
