import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchBreeds } from '../Actions/index';

const breedDetails = () => {
  const breedData = useSelector((state) => state.breedReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);

  return (
    breedData.map((breed) => {
      if (breed.id === id) {
        return (
          <div key={breed.id}>

            <p>
              id=
              {breed.id}
            </p>
            <p>
              name=
              {breed.name}
            </p>
            <p>
              lifeSpan=
              {breed.lifeSpan}
            </p>
            <p>
              origin=
              {breed.origin}
            </p>
            <p>
              temperament=
              {breed.temperament}
            </p>
            <p>
              image=
              {breed.image.url}
            </p>
            <p>
              weight=
              {breed.weight.imperial}
            </p>
            <p>
              height=
              {breed.height.imperial}
            </p>

          </div>
        );
      }
      return null;
    })
  );
};

breedDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,

};

export default breedDetails;
