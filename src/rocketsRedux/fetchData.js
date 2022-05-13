export const myReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case 'GET':
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

const createActionForPutDataToStore = (info) => ({
  type: 'GET',
  payload: info,
});

export const createActionForReserve = (id) => ({
  type: 'RESERVE',
  payload: id,
});

export const createActionForCancel = (id) => ({
  type: 'CANCEL RESERVATION',
  payload: id,
});

const fetchData = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const dataList = await response.json();
  dispatch(createActionForPutDataToStore(dataList));
};

export default fetchData;
