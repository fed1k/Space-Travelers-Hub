import React from "react";
import planet from "../img/planet.png";

const Navbar = () => {
  return (
    <nav>
      <div className="title">
        <div>
          <img className="logo-img" src={planet} alt="logo" />
        </div>
        <h1>Space Travellers' Hub</h1>
      </div>
      <div>
        <ul>
          <li>Rockets</li>
          <li>Missions</li>
          <li className="profile">My Profile</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
