import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction, fetchBreeds } from '../Actions/index';

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
    <div>
      <div>
        <p>Select Dog Breed</p>
        <select>
          {filteredBreeds.map((dogBreeds) => (
            <option key={dogBreeds.id} onClick={handleFilterChanger}>
              {dogBreeds.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterForm;
