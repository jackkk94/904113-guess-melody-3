import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from './welcome-screen';


Enzyme.configure({
  adapter: new Adapter(),
});

const name = `Alex`;

it(`<WelcomeScreen /> should be pressed`, () => {
  const onBtnClick = jest.fn();

  const screen = shallow(
      <WelcomeScreen
        name = {name}
        onButtonClick={onBtnClick}
      />
  );

  const btn = screen.find(`button.welcome__button`);

  btn.props().onClick();

  expect(onBtnClick.mock.calls.length).toBe(1);
});
