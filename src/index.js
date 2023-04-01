import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { DarkModeContextProvider } from './context/darkModeContext';
import { DataContextProvider } from './context/DataContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
    
        <DataContextProvider>
          <App />
        </DataContextProvider>
     
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
