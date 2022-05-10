import './index.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import fetchData from './rocketsRedux/fetchData';
import Rocket from './components/Rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Rocket />
      </header>
    </div>
  );
}

export default App;
