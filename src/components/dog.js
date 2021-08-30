import React from 'react';
import PropTypes from 'prop-types';

const Breed = ({
  name,
}) => (
  <div className="high">
    {name}
  </div>
);

Breed.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Breed;
