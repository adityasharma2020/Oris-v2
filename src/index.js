import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { DarkModeContextProvider } from './context/darkModeContext';
import { DataContextProvider } from './context/DataContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
