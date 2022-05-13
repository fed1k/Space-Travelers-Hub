const TOGGLE_BUTTON = 'TOGGLE_BUTTON';

const requestData = (message) => ({
  type: 'FETCH',
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

export const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH': {
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
