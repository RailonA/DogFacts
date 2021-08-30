import axios from 'axios';
import { fetchDataSuccessAction } from './index';

export const fetchBreed = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    const breeds = await response.data;
    dispatch(fetchDataSuccessAction(breeds));
  } catch (error) {
    return error.message;
  }
  return null;
};

export default { fetchBreed };
