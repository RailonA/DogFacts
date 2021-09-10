import axios from 'axios';

export const fetchData = (data) => ({
  type: 'FETCH_DATA',
  data,
});

export const filterAction = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

export const selectedBreed = (breed) => ({
  type: 'SELECT_BREED',
  breed,
});

export const fetchBreeds = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds?limit=20');
    const breeds = await response.data;
    dispatch(fetchData(breeds));
  } catch (error) {
    return error.message;
  }
  return null;
};
