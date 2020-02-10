import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const name = `Tom`;

it(`<App /> should render Tom`, () => {
  const tree = renderer
    .create(<App name = {name}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

