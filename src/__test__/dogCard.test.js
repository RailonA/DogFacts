import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import DogCard from '../Components/dogCard';

describe('DogCard DOM', () => {
  it('renders correctly', () => {
    const dogCard = renderer.create(
      <DogCard
        name="name"
        image="dogImage"
        weight="5"
        height="5"
      />,
    ).toJSON();
    expect(dogCard).toMatchSnapshot();
  });

  it('renders card content correctly', () => {
    const dogCard = renderer.create(
      <DogCard
        name="name"
        image="dogImage"
        weight="5"
        height="5"
      />,
    ).toJSON();
    expect(dogCard.name).not.toBe('name');
  });
});
