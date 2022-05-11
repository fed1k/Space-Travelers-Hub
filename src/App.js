import { React, useEffect } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Missions from './missions/missionPage';
import { fetchMissions } from './missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Missions />
      </header>
    </div>
  );
}

export default App;
