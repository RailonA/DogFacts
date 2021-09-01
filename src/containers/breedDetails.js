import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBreeds } from '../Actions/index';

const breedDetails = () => {
  const breedData = useSelector((state) => state.breedReducer.data);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);

  return (
    breedData.id.map((breed) => {
      if (breed.id === id) {
        return (
          <div key={breed.id}>

            <p>
              {breed.name}
              {breed.id}
            </p>

          </div>
        );
      }
      return null;
    })
  );
};

export default breedDetails;
