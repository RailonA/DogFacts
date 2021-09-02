import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction, fetchBreeds } from '../Actions/index';
import '../styles/filterForm.css';

const FilterForm = () => {
  const breedsData = useSelector((state) => state.breedReducer);
  const filter = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  const handleFilterChanger = (e) => {
    dispatch(filterAction(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);

  const filteredBreeds = (filter !== '') ? breedsData.filter((breeds) => breeds.id === filter) : breedsData;

  return (
    <div className="searchWrapper d-flex justify-content-center mt-3 mb-3">
      <div className="d-flex flex-column justify-content-center text-center mb-3">
        <p className="selectBreed">Select Dog Breed</p>
        <select>
          {filteredBreeds.map((breeds) => (
            <option className="text-center" key={breeds.id} onClick={handleFilterChanger}>
              {breeds.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterForm;
