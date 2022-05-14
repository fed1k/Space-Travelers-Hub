import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from '../components/missionComponent';
import { fetchMissions } from '../rocketsRedux/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>ChangeStatus</th>
          </tr>
        </thead>
        <tbody>
          { missions.map((mission) => (
            <Mission
              name={mission.mission_name}
              id={mission.mission_id}
              description={mission.description}
              joined={mission.reserved}
              key={mission.mission_id}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
