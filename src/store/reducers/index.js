import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import breedReducer from './breedReducer';
import selectedBreedReducer from './selectedBreed';

const rootReducer = combineReducers({ filterReducer, breedReducer, selectedBreedReducer });

export default rootReducer;
