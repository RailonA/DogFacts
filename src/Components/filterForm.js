import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import '../styles/filterForm.css';

const FilterForm = ({ onBreedToFilter }) => {
  const breedsData = useSelector((state) => state.breedReducer);
  const options = breedsData.map((breed) => (
    <option value={breed.id} key={breed.id}>
      {breed.name}
    </option>
  ));

  return (
    <select onChange={onBreedToFilter} key={breedsData.id}>
      {options}
    </select>
  );
};

FilterForm.propTypes = {
  onBreedToFilter: PropTypes.func,
};

FilterForm.defaultProps = {
  onBreedToFilter: () => {
  },
};
export default FilterForm;
