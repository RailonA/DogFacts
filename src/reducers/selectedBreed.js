const selectBreedReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_BREED':
      return action.breed;

    default:
      return state;
  }
};

export default selectBreedReducer;
