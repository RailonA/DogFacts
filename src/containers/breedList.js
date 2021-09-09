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

      <div>
        <div>
          <FilterForm onBreedToFilter={handleFilterChanger} allBreeds={breedsData} />
        </div>
        <div className=" d-flex container flex-wrap">
          <div className="row ">
            <div className="d-flex flex-wrap  justify-content-center">
              {filteredBreeds.map((breed) => (
                <Link to={`/details/${breed.id}`} key={breed.id} className="col-12 col-md-6">
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedList;
