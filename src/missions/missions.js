const TOGGLE_BUTTON = 'TOGGLE_BUTTON';

const initialState = {
  missions: [],
  show: false,
};

const requestData = (message) => ({
  type: 'GET',
  payload: message,
});

export const fetchMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  dispatch(requestData(data));
};

export const toggleButton = (id) => ({
  type: TOGGLE_BUTTON,
  payload: id,
});

export const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET': {
      return action.payload;
    }

    case TOGGLE_BUTTON: {
      const newMission = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: !mission.reserved };
      });
      return newMission;
    }
    default:
      return state;
  }
};
