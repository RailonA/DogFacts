import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterAction } from '../store/actions/index';
import { fetchBreed } from '../store/actions/thunk';
import FilterForm from '../components/filterForm';
import DOG from '../components/dog';

const BreedList = () => {
  const breedsData = useSelector((state) => state.breedReducer.data);
  const filter = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  const handleFilterChanger = (e) => {
    dispatch(filterAction(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchBreed());
  }, []);

  const filteredBreeds = (filter !== '') ? breedsData.id.filter((breeds) => breeds.name === filter) : breedsData.breeds;
  return (

    <div>
      <div>
        <p>Home</p>
      </div>

      <div>
        <div>
          <FilterForm onCrytoFilter={handleFilterChanger} />
        </div>
        <div>
          {filteredBreeds.map((breeds) => (
            <Link to={`/${breeds.id}`} key={breeds.id}>
              <DOG
                key={breeds.id}
                name={breeds.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreedList;
