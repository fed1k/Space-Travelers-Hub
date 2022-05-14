const fetchData = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  return data;
};

const FETCH = 'Space-Travelers-Hub/rockets/FETCH';

export const createActionForPutDataToStore = () => async (dispatch) => {
  const myRockets = await fetchData();

  const rockets = myRockets.map((rocket) => (
    {
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      image: rocket.flickr_images[0],
      description: rocket.description,
    }
  ));
  dispatch({
    type: FETCH,
    payload: rockets,
  });
};

export const createActionForReserve = (id) => ({
  type: 'RESERVE',
  payload: id,
});

export const createActionForCancel = (id) => ({
  type: 'CANCEL RESERVATION',
  payload: id,
});

const myReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case FETCH:
      return action.payload;
    case 'RESERVE':
      newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    case 'CANCEL RESERVATION':
      newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return newState;
    default:
      return state;
  }
};

export default myReducer;
