import './index.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rocket from './components/Rockets';
import MyProfile from './components/myProfile';
import Missions from './Pages/missionPage';
import { createActionForPutDataToStore } from './redux/rockets/fetchData';
import { requestData } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createActionForPutDataToStore());
    dispatch(requestData());
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Rocket />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
