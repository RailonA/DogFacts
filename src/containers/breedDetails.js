import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBreed } from '../store/actions/thunk';

const CryptoDetails = () => {
  const breedData = useSelector((state) => state.cryptoReducer.data);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreed());
  }, []);

  return (
    breedData.breed.map((breed) => {
      if (breed.id === id) {
        return (
          <div className="content-wrapper" key={breed.id}>

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

export default CryptoDetails;
