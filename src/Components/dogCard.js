import React from 'react';
import PropTypes from 'prop-types';
import '../styles/dogCard.css';

const DogCard = ({
  name, image, weight, height,
}) => (
  <div className="dogCard p-3 col">
    <div className="d-flex justify-content-center ">
      <img src={image} alt="dogImage" className="dogImg d-flex align-self-center" />
    </div>
    <div className="mt-3 dogMainInfo d-flex flex-column justify-content-center ">
      <div className="d-flex justify-content-center mt-3 ">
        <p className="d-flex  dogInfo mr-3">Name: </p>
        <p>{name}</p>
      </div>
      <div className="d-flex justify-content-center">
        <p className="d-flex dogInfo mr-3">weight:</p>
        <p>{weight}</p>
        <p className="ml-1">lbs</p>
      </div>
      <div className="d-flex justify-content-center">
        <p className="d-flex dogInfo mr-3">height:</p>
        <p>{height}</p>
        <p className="ml-1">inch</p>
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
