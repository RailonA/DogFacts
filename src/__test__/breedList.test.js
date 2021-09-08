import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BreedList from '../containers/breedList';
import rootReducer from '../reducers/index';

describe('BreedList DOM', () => {
  it('renders correctly when store is provided', () => {
    const store = createStore(rootReducer);
    const breedList = renderer.create(
      <Provider store={store}>
        <BreedList />
      </Provider>,
    ).toJSON();
    expect(breedList).toMatchSnapshot();
  });
});
