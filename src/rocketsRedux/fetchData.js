export const myReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET':
      return action.payload;
    default:
      return state;
  }
};

const createActionForPutDataToStore = (info) => ({
  type: 'GET',
  payload: info,
});

const fetchData = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const dataList = await response.json();
  dispatch(createActionForPutDataToStore(dataList));
};

export default fetchData;
