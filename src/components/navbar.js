import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="ui secondary  menu">
    <div className="wrapper navbar">
      <Link to="/" className="active item nav-logo">BreedList</Link>
      <i className="bars icon" />
    </div>
  </div>

);

export default Navbar;
