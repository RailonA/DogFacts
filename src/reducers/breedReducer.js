const initialState = [];

const breedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return action.data;
    default:
      return state;
  }
};

export default breedReducer;
