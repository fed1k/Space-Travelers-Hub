import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MissionProfile = () => {
  const data = useSelector((state) => state);

  return (
    <div>
      <div>
        <h1>My Missions</h1>
        {data.map((i) => i.reserved && (
          <div>
            <h1>{i.mission_name}</h1>
            <button type="button"><Link to="/missions">To Leave Mission</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionProfile;
