import './index.scss';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import fetchData from './rocketsRedux/fetchData';
import Rocket from './components/Rockets';
import MyProfile from './components/myProfile';
// import { fetchMissions } from './rocketsRedux/missions';
import Missions from './Pages/missionPage';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  // dispatch(fetchData());
  // dispatch(fetchMissions());
  // }, []);
  // const rockets = useSelector((state) => state.rockets);
  // const reserveRocket = (id) => {
  //   dispatch(createActionForReserve(id));
  // };
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
