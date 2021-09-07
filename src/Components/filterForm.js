import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import '../styles/filterForm.css';

const BreedFilter = ({ dogBreed }) => {
  const breedsData = useSelector((state) => state.breedReducer);
  const options = breedsData.map((breed) => (
    <option value={breed} key={breed}>
      {breed.name}
    </option>
  ));

  return (
    <select onChange={dogBreed}>
      {options}
    </select>
  );
};

BreedFilter.propTypes = {
  dogBreed: PropTypes.func.isRequired,
};
export default BreedFilter;
