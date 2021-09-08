import filterReducer from '../reducers/filterReducer';
import breedReducer from '../reducers/breedReducer';

const mockData = {
  data: {
    breeds: [{ breed1: 'breed1', ids: 1 },
      { breed2: 'breed2', ids: 2 },
      { breed3: 'breed3', ids: 3 },
    ],
  },
};

describe('Reducers', () => {
  const action = {
    type: 'FETCH-DATA',
    data: {
      breeds: [{ breed1: 'breed1', ids: 1 },
        { breed2: 'breed2', ids: 2 },
        { breed3: 'breed3', ids: 3 },
      ],
    },
  };

  const action2 = {
    type: 'CHANGE_FILTER',
    filter: 2,
  };

  it('crypto reducer has an initial empty content', () => {
    expect(breedReducer([], {})).not.toEqual(undefined);
  });

  it('crypto reducer has an initial state', () => {
    expect(breedReducer([], {})).toEqual([]);
  });

  it('crypto reducer has cryptocurrencies in state', () => {
    expect(breedReducer({}, action)).not.toEqual(mockData);
  });

  it('crypto reducer has cryptocurrencies in state', () => {
    expect(breedReducer({}, action)).toEqual({});
  });

  it('filter reducer returns a breed id', () => {
    expect(filterReducer('', action2)).toEqual(2);
  });

  it('filter reducer returns a breed id', () => {
    expect(filterReducer('', action2)).not.toEqual(0);
  });
});
