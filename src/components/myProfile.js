import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createActionForCancel } from '../redux/rockets/fetchData';
import { leaveButton } from '../redux/missions/missions';

const MyProfile = () => {
  const dataRockets = useSelector((state) => state.rockets);
  const reservedRockets = dataRockets.filter((rocket) => rocket.reserved);

  const dataMissions = useSelector((state) => state.missions);
  const reservedMissions = dataMissions.filter((mission) => mission.reserved);

  const dispatch = useDispatch();
  const cancelHandler = (id) => {
    dispatch(createActionForCancel(id));
  };
  const leaveMission = (id) => {
    dispatch(leaveButton(id));
  };

  return (
    <div className="profiles">
      <div className="myMissions">
        <div>
          <h1>My Missions</h1>
          {reservedMissions.map((mission) => (
            <div key={mission.id}>
              <h2>{mission.name}</h2>
              <button type="button" className="leave" onClick={() => leaveMission(mission.id)}>Leave mission</button>
            </div>
          ))}
        </div>
      </div>

      <div className="myProfile">
        <div className="rockets-container">
          <h1>My Rockets</h1>
          {reservedRockets.map((rocket) => (
            <div key={rocket.id}>
              <h1>{rocket.name}</h1>
              <button type="button" onClick={() => cancelHandler(rocket.id)}>Cancel Reservation</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
