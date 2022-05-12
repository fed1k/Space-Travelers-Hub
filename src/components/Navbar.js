import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li className="profile"><NavLink to="/myprofile">My Profile</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
