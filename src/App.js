import { React, useEffect } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { fetchMissions } from './missions/missions';
import Missions from './missions/missionPage';
import MissionProfile from './missions/missionsProfile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MissionProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
