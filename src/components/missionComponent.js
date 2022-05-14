import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleButton } from '../rocketsRedux/missions';

const Mission = (props) => {
  const {
    name, id, description, joined,
  } = props;
  const dispatch = useDispatch();
  const join = () => {
    dispatch(toggleButton(id));
  };

  return (
    <tr>
      <th>{name}</th>
      <td>{description}</td>
      <td>
        <button type="button" className={`member ${joined}`}>
          {joined ? 'Active Member' : 'NOT A MEMBER'}
        </button>
      </td>
      <td>
        <button type="button" className={`join ${joined}`} onClick={join}>
          {joined ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

Mission.defaultProps = {
  joined: false,
};
Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  joined: PropTypes.bool,
};

export default Mission;
