import { createContext, useEffect, useReducer } from 'react';
import DataReducer from './DataReducer';

const INITIAL_STATE = {
  currentFile: null,
};

export const DataContext = createContext(INITIAL_STATE);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, INITIAL_STATE);

  return (
    <DataContext.Provider value={{ currentFile: state.currentFile, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
