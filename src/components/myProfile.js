import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createActionForCancel } from '../rocketsRedux/fetchData';

const MyProfile = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const cancelHandler = (id) => {
    dispatch(createActionForCancel(id));
  };
  return (
    <div className="myProfile">
      <div>
        <h1>My Missions</h1>
      </div>
      <div className="rockets-container">
        <h1>My Rockets</h1>
        {data.map((i) => i.reserved && (
          <div className="profile-rocket-div">
            <h1>{i.rocket_name}</h1>
            <button type="button" onClick={() => cancelHandler(i.id)}>Cancel Reservation</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyProfile;
