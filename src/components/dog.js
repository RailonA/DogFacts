import React from 'react';
import PropTypes from 'prop-types';

const Dog = ({
  name,
}) => (
  <div>
    {name}
  </div>
);

Dog.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Dog;
