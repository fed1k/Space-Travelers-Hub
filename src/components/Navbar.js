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
        <li>
          <NavLink
            className="link"
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Rockets
          </NavLink>

        </li>
        <li>
          <NavLink
            to="/missions"
            className="link"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Missions
          </NavLink>
        </li>
        <li className="profile">
          <NavLink
            to="/myprofile"
            className="link"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            My Profile
          </NavLink>

        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
