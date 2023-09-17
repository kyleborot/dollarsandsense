const initialState = {
    selectedChoice: '', // Initial state
  };
  
  const choiceReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CHOICE':
        return {
          ...state,
          selectedChoice: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default choiceReducer;