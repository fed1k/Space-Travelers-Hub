import { fetchMissions, createMission } from './api';

const ADD_MISSION = 'ADD_MISSION';
const GET_MISSION = 'GET_MISSION';

export const addMission = (payload) => async (dispatch) => {
  await createMission(payload);
  dispatch({
    type: ADD_MISSION,
    payload,
  });
};

export const getMissions = () => async (dispatch) => {
  const result = await fetchMissions();
  const missions = Object.entries(result).map(([missionId, [mission]]) => ({
    id: missionId,
    missionName: mission,
  }));
  dispatch({
    type: GET_MISSION,
    payload: missions,
  });
};

export const missionReducer = (state = initialState, action) => {
  const missions = [...state, action.payload];
  switch (action.type) {
    case GET_MISSION:
      return action.payload;
    case ADD_MISSION:
      return missions;
    default:
      return state;
  }
};
