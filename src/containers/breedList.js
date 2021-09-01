import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterAction, fetchBreeds } from '../Actions/index';
import FilterForm from '../Components/filterForm';
import DogCard from '../Components/dogCard';

const BreedList = () => {
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
        <div>
          <FilterForm onBreedToFilter={handleFilterChanger} />
        </div>
        <div>
          {filteredBreeds.map((breeds) => (
            <Link to={`${breeds.id}`} key={breeds.id}>
              <DogCard
                key={breeds.id}
                name={breeds.name}
                LifeSpan={breeds.LifeSpan}
                origin={breeds.origin}

              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreedList;
