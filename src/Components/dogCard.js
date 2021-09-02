import React from 'react';
import PropTypes from 'prop-types';
import '../styles/dogCard.css';

const DogCard = ({
  name, lifeSpan, id, temperament, origin, image, weight, height,
}) => (
  <div className="dogWrapper">
    <div className="dogCard">
      <div className="d-flex">
        <p>images</p>
        <p className="ml-4 fw-bold">
          name:
          {name}
        </p>
        <img src={image} alt="dogImage" />
      </div>
      <p className="fw-bold mr-2">
        lifeSpan:
        {lifeSpan}
      </p>
      <p className="fw-bold">
        id:
        {id}
      </p>
      <p className="fw-bold">
        temperament:
        {temperament}
      </p>
      <p className="fw-bold">
        origin:
        {origin}
      </p>
      <p className="fw-bold">
        image:
        {image}
      </p>
      <p className="fw-bold">
        weight:
        {weight}
      </p>
      <p className="fw-bold">
        height:
        {height}
      </p>
    </div>
  </div>
);

DogCard.propTypes = {
  name: PropTypes.string.isRequired,
  lifeSpan: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  temperament: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,

};

export default DogCard;
