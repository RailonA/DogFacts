import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBreeds } from '../Actions/index';

const breedDetails = () => {
  const { id } = useParams();
  const breedData = useSelector((state) => state.breedReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);

  console.log(breedData);
  console.log(parseInt(id, 10));

  return (
    breedData.map((breed) => {
      if (breed.id === (parseInt(id, 10))) {
        return (
          <div key={breed.id}>
            <h1>TESTING</h1>
            <img src={breed.image.url} alt="dogImage" className="dogImg" />
            <p>
              {breed.name}
            </p>
          </div>
        );
      }
      return null;
    })
  );
};

export default breedDetails;
