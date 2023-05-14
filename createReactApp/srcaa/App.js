import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';
import HomePage from './pages/HomePage/HomePage';
import 'react-circular-progressbar/dist/styles.css';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to='/login' />;
  // };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            {/* <Route path='login' element={<Login />} />

            <Route path='graph' element={<Graph />} />
            <Route path='regraph' element={<ReChartGraph />} />
            <Route path='zoomgraph' element={<ZoomGraph />} />
            <Route path='brushRechart' element={<BrushRechart />} />
            <Route path='skew-calculator' element={<SkewCalculator />} />
            <Route path='search-sequence' element={<SearchSequence />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
