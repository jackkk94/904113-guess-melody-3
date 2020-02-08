import React, {Component} from 'react';
import WelcomeScreen from './welcome-screen';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <WelcomeScreen name={this.props.name} />
    );
  }
}

export default App;

App.propTypes = {
  name: PropTypes.string.isRequired,
};
