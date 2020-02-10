import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

const name = `Alex`;

it(`<WelcomeScreen /> should render Alex`, () => {
  const tree = renderer
    .create(<WelcomeScreen name = {name} onButtonClick={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

