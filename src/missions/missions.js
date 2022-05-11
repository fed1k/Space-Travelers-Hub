const FETCH = 'FETCH';
const SHOW = 'SHOW';
const TOGGLE_BUTTON = 'TOGGLE_BUTTON';
const baseUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  show: false,
};

export const fetchMissions = () => (dispatch) => {
  dispatch({ type: SHOW });
  return (baseUrl, 'GET')
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH, data }));
};

export const toggleButton = (id) => ({
  type: TOGGLE_BUTTON,
  id,
});

export const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH: {
      return {
        ...state,
        missions: [...action.data],
        show: false,
      };
    }

    case SHOW: {
      return {
        ...state,
        show: true,
      };
    }

    case TOGGLE_BUTTON: {
      const newMission = state.missions.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });
      return {
        ...state,
        missions: newMission,
      };
    }
    default:
      return state;
  }
};
