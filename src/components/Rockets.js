import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createActionForReserve, createActionForCancel } from '../rocketsRedux/fetchData';

let count = 0;
const Rocket = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => (state));
  const reserveHandler = (id) => {
    count += 1;
    if (count % 2 !== 0) dispatch(createActionForReserve(id));
    if (count % 2 === 0) dispatch(createActionForCancel(id));
    data.map((i) => console.log(i));
  };

  return (
    <section className="main-rocket-div">
      {data.map((rocket) => (
        <div key={rocket.id} className="rocket-divider" id={rocket.id}>
          <img className="rocket-images" src={rocket.flickr_images[0]} alt="Images" />
          <div>
            <h3>{rocket.rocket_name}</h3>
            <p>
              {rocket.reserved && (<span className="reserve-text">Reserved</span>)}
              {rocket.description}
            </p>
            <button type="button" onClick={() => reserveHandler(rocket.id)}>{rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rocket;
