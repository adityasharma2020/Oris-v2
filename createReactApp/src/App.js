import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './style/dark.scss';
import 'rodal/lib/rodal.css';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';
import Graph from './pages/Graph/Graph';
import ReChartGraph from './pages/ReChartGraph/ReChartGraph';
import ZoomGraph from './pages/ZoomGraph/ZoomGraph';
import BrushRechart from './pages/brushRechart/BrushRechart.jsx';
import SkewCalculator from './pages/SkewCalculator/SkewCalculator';
import SearchSequence from './pages/SearchSequence/SearchSequence';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />;
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<Login />} />
            <Route index element={<Home />} />

            <Route path='graph' element={<Graph />} />
            <Route path='regraph' element={<ReChartGraph />} />
            <Route path='zoomgraph' element={<ZoomGraph />} />
            <Route path='brushRechart' element={<BrushRechart />} />
            <Route path='skew-calculator' element={<SkewCalculator />} />
            <Route path='search-sequence' element={<SearchSequence />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
