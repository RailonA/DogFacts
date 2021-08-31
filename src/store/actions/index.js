import * as actionType from './actionType';

const fetchDataSuccessAction = (data) => ({
  type: actionType.FETCH_DATA,
  data,
});

const filterAction = (filter) => ({
  type: actionType.CHANGE_FILTER,
  filter,
});

const selectedBreed = (breed) => ({
  type: actionType.SELECT_BREED,
  breed,
});

export {
  fetchDataSuccessAction,
  filterAction,
  selectedBreed,
};
