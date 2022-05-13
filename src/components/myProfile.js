import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createActionForCancel } from '../rocketsRedux/fetchData';

const MyProfile = () => {
  const dataRockets = useSelector((state) => state.rockets);
  const dataMissions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const cancelHandler = (id) => {
    dispatch(createActionForCancel(id));
  };
  return (
    <div>
      <div className="myMissions">
        <div>
          <h1>My Missions</h1>
          {dataMissions.map((i) => i.reserved && (
            <div className="joined">
              <h2>{i.mission_name}</h2>
              <Link to="/missions" className="leavetext"><button type="button" className="leave">To leave</button></Link>
            </div>
          ))}
        </div>
      </div>

      <div className="myProfile">
        <div className="rockets-container">
          <h1>My Rockets</h1>
          {dataRockets.map((i) => i.reserved && (
            <div className="profile-rocket-div">
              <h1>{i.rocket_name}</h1>
              <button type="button" onClick={() => cancelHandler(i.id)}>Cancel Reservation</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
