import React from 'react';
import PropTypes from 'prop-types';

const DogCard = ({
  name, lifeSpan,
}) => (
  <div>
    <p>
      {name}
    </p>
    <p>
      {lifeSpan}
    </p>
  </div>
);

DogCard.propTypes = {
  name: PropTypes.string.isRequired,
  lifeSpan: PropTypes.string.isRequired,

};

export default DogCard;
