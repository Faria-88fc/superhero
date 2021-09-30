import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <img className="header-logo" src="images/head-logo.png" alt="" />
      </div>
      <div className='title'>
      <h1>Psycure Organization</h1>
      <small>Our aim is to work for your betterment</small>
      <h3> An overview of honorable team members of Psycure </h3>
      <h3>Total Member:25</h3>
      </div>
    </div>
  );
};

export default Header;