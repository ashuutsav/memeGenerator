import React from 'react';
import troll from '../images/troll-face.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <img className="navbar-logo" src={troll} alt="troll" />
      <h2 className="navbar-title">Meme Generator</h2>
      <p className="navbar-project">React Course - Project 3</p>
    </div>
  );
};

export default Navbar;
