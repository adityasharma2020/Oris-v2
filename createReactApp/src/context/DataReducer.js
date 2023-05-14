const DataReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return {
        currentFile: action.payload,
      };
    }
    case "UNSET_DATA": {
      return {
        currentFile: null,
      };
    }
    default:
      return state;
  }
};

export default DataReducer;
