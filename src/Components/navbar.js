import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';

const Navbar = () => (
  <div className="navBar-header">
    <div className="d-flex justify-content-between navBar-Wrapper">
      <Link className="headerTitle d-flex align-items-center pl-5" to="/">BreedList</Link>
      <i className="fas fa-bars d-flex align-items-center pr-5" />
    </div>
  </div>

);

export default Navbar;
