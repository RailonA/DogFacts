import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <div>
      <Link to="/" className="active item nav-logo">BreedList</Link>
    </div>
  </div>

);

export default Navbar;
