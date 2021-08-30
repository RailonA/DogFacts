const selectBreedReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_BREED':
      return {
        ...state,
        // ...breeds,
      };
    default:
      return state;
  }
};

export default selectBreedReducer;
