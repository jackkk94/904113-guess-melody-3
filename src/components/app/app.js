import React, {Component} from 'react';
import WelcomeScreen from '../welcome/welcome-screen';
import PropTypes from 'prop-types';

class App extends Component {
  handleClick() {
    return true;
  }

  render() {
    return (
      <WelcomeScreen name={this.props.name} onButtonClick={this.handleClick}/>
    );
  }
}

export default App;

App.propTypes = {
  name: PropTypes.string.isRequired,
};
