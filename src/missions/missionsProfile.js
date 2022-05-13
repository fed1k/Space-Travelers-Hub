import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MissionProfile = () => {
  const data = useSelector((state) => state);

  return (
    <div className="myMissions">
      <div>
        <h1>My Missions</h1>
        {data.map((i) => i.reserved && (
          <div className="joined">
            <h2>{i.mission_name}</h2>
            <Link to="/missions" className="leavetext"><button type="button" className="leave">To leave</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionProfile;
