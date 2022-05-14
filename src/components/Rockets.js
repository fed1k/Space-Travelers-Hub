import { useSelector, useDispatch } from 'react-redux';
import { createActionForReserve, createActionForCancel } from '../redux/rockets/fetchData';

const Rocket = () => {
  const dataRockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const reserveHandler = (id) => {
    dispatch(createActionForReserve(id));
  };

  const cancelHandler = (id) => {
    dispatch(createActionForCancel(id));
  };

  return (
    <section className="main-rocket-div">
      {dataRockets.map((rocket) => (
        <div key={rocket.id} className="rocket-divider" id={rocket.id}>
          <img className="rocket-images" src={rocket.image} alt="Images" />
          <div>
            <h3>{rocket.name}</h3>
            <p>
              {rocket.reserved && (<span className="reserve-text">Reserved</span>)}
              {rocket.description}
            </p>
            {!rocket.reserved && (
              <button type="button" onClick={() => reserveHandler(rocket.id)}>Reserve Rocket</button>
            )}
            {rocket.reserved && (
              <button type="button" onClick={() => cancelHandler(rocket.id)}>Cancel Reservation</button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rocket;
