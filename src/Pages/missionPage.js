import React from 'react';
import { useSelector } from 'react-redux';
import Mission from '../components/missionComponent';

const Missions = () => {
  const missions = useSelector((state) => state);
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
