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

  const filteredBreeds = (filter !== '') ? breedsData.filter((breeds) => breeds.id === (parseInt(filter, 10))) : breedsData;
  return (

    <div>

      <div className="d-flex justify-content-center flex-column">
        <div>
          <FilterForm onBreedToFilter={handleFilterChanger} />
        </div>
        <div className="col-12 flex-xs-colomn flex-nowrap justify-content-center">
          {filteredBreeds.map((breed) => (
            <Link to={`/details/${breed.id}`} key={breed.id}>
              <div className="d-flex flex-nowrap col-xs-12 col-sm-5 col-md-5 justify-content-center">
                <DogCard
                  id={breed.id}
                  name={breed.name}
                  lifeSpan={breed.life_Span}
                  origin={breed.origin}
                  temperament={breed.temperament}
                  image={breed.image.url}
                  weight={breed.weight.imperial}
                  height={breed.height.imperial}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreedList;
