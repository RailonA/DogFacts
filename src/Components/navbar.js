import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';
import { useDispatch } from 'react-redux';
import { filterAction } from '../Actions/index';

const Navbar = () => {
  const dispatch = useDispatch();
  const resetFilterList = () => {
    dispatch(filterAction(''));
  };
  return (
    <div className="navBar-header">
      <div className="d-flex justify-content-between navBar-Wrapper">
        <Link onClick={resetFilterList} className="headerTitle d-flex align-items-center pl-5" to="/">BreedList</Link>
        <i className="fas fa-bars d-flex align-items-center pr-5" />
      </div>
    </div>
  );
};

export default Navbar;
