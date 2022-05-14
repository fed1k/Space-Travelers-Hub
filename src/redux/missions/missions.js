const fetchMissions = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  return data;
};

const FETCH = 'Space-Travelers-Hub/missions/FETCH';
const JOIN = 'Space-Travelers-Hub/missions/JOIN';
const LEAVE = 'Space-Travelers-Hub/missions/LEAVE';
const TOGGLE_BUTTON = 'Space-Travelers-Hub/missions/TOGGLE_BUTTON';

export const requestData = () => async (dispatch) => {
  const myMissions = await fetchMissions();
  const missions = myMissions.map((mission) => (
    {
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }
  ));
  dispatch({
    type: FETCH,
    payload: missions,
  });
};

export const toggleButton = (id) => ({
  type: TOGGLE_BUTTON,
  payload: id,
});

export const joinButton = (id) => ({
  type: JOIN,
  payload: id,
});

export const leaveButton = (id) => ({
  type: LEAVE,
  payload: id,
});

const missionsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case FETCH: {
      return action.payload;
    }

    case JOIN: {
      newState = state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return {
          ...mission, reserved: true,
        };
      });
      return newState;
    }

    case LEAVE: {
      newState = state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return {
          ...mission, reserved: false,
        };
      });
      return newState;
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

export default missionsReducer;
