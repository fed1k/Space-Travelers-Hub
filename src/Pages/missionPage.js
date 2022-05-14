import { useSelector } from 'react-redux';
import Mission from '../components/missionComponent';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

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
          {missions.map((mission) => (
            <Mission
              key={mission.id}
              mission={mission}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
