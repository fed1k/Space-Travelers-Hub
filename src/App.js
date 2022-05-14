import { React, useEffect } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import fetchData from './rocketsRedux/fetchData';
import Rocket from './components/Rockets';
import MyProfile from './components/myProfile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Rocket />} />
          <Route path="/myProfile" element={<MyProfile />} />
          {/* <Route path="/myProfile" element={} /> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
