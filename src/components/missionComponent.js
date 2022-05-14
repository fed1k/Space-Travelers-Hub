import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { toggleButton } from '../redux/missions/missions';
import { leaveButton, joinButton } from '../redux/missions/missions';

const Mission = (props) => {
  const { mission } = props;

  const dispatch = useDispatch();

  const join = (id) => {
    dispatch(joinButton(id));
  };

  const leave = (id) => {
    dispatch(leaveButton(id));
  };

  return (
    <tr>
      <th>{mission.name}</th>
      <td>{mission.description}</td>
      <td>
        {!mission.reserved && (
          <button type="button" className="inactive">NOT A MEMBER</button>
        )}
        {mission.reserved && (
          <button type="button" className="activeMember">Active Member</button>
        )}
      </td>
      <td>
        {!mission.reserved && (
          <button type="button" onClick={() => { join(mission.id); }} className="notJoined">
            Join Mission
          </button>
        )}
        {mission.reserved && (
          <button type="button" onClick={() => { leave(mission.id); }} className="joinedMission">
            Leave Mission
          </button>
        )}
      </td>
    </tr>
  );
};

Mission.defaultProps = {
  mission: [],
};

Mission.propTypes = {
  mission: PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      reserved: PropTypes.bool,
    },
  ),
};

export default Mission;
