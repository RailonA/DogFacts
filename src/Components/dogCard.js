import React from 'react';
import PropTypes from 'prop-types';
import '../styles/dogCard.css';

const DogCard = ({
  name, image, weight, height,
}) => (
  <div className="dogWrapper col-12">
    <div className="dogCard d-flex flex-column  p-4 col-5">
      <div className="d-flex flex-column mr-4">
        <div className="ml-4 d-flex">
          <p className="ml-4 d-flex dogInfo mr-3">Name: </p>
          <p>{name}</p>
        </div>
        <img src={image} alt="dogImage" className="dogImg" />
      </div>
      <div>
        <div className="ml-4 d-flex mt-3">
          <p className="ml-4 d-flex dogInfo mr-3">weight:</p>
          <p>{weight}</p>
        </div>
        <div className="ml-4 d-flex">
          <p className="ml-4 d-flex dogInfo mr-3">height:</p>
          <p>{height}</p>
        </div>
      </div>
    </div>
  </div>
);

DogCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,

};

export default DogCard;
