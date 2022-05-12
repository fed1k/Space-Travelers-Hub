import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../img/planet.png';

const Navbar = () => (
  <nav>
    <div className="title">
      <div>
        <img className="logo-img" src={planet} alt="logo" />
      </div>
      <h1>Space Travellers Hub</h1>
    </div>
    <div>
      <ul>
        <Link to="/">Rockets</Link>
        <Link to="/Missions">Missions</Link>
        <Link to="/myProfile">My Profile</Link>
      </ul>
    </div>
  </nav>
);

export default Navbar;
