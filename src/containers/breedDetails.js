import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBreeds } from '../Actions/index';
import '../styles/breedDetails.css';

const breedDetails = () => {
  const { id } = useParams();
  const breedData = useSelector((state) => state.breedReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);

  return (
    breedData.map((breed) => {
      if (breed.id === (parseInt(id, 10))) {
        return (
          <div key={breed.id} className="breedDetailWrapper col-12 d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center">
              <h1 className="p-3">{breed.name}</h1>
            </div>
            <div className="d-flex justify-content-center">
              <img src={breed.image.url} alt="dogImage" className="dogImgDetail" />
            </div>
            <div className="d-flex mt-5 p-4 flex-column justify-content-center infoContainer">
              <div className="d-flex justify-content-start">
                <p className="mr-1 detailInfo">Weight: </p>
                <p className="ml-1">lbs </p>
                <p>
                  {breed.weight.imperial}
                </p>
              </div>
              <div className="d-flex justify-content-start">
                <p className="mr-1 detailInfo">Height: </p>
                <p>
                  {breed.height.imperial}
                </p>
                <p className="ml-1">inch </p>
              </div>
              <div className="d-flex justify-content-start">
                <p className="mr-1 detailInfo">Temperment: </p>
                <p>
                  {breed.temperament}
                </p>
              </div>
              <div className="d-flex justify-content-start">
                <p className="mr-1 detailInfo">Life Spane:</p>
                <p>
                  {breed.life_span}
                </p>
              </div>
              <div className="d-flex justify-content-start">
                <p className="mr-1 detailInfo">Origin:</p>
                <p>
                  {breed.country_code}
                </p>
              </div>
              <div className="d-flex justify-content-start">
                <p className="mr-1 detailInfo">Breed Group:</p>
                <p>
                  {breed.breed_group}
                </p>
              </div>
            </div>
          </div>
        );
      }
      return null;
    })
  );
};

export default breedDetails;
