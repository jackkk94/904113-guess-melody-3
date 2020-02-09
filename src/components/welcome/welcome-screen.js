import React, {Component} from 'react';
import PropTypes from 'prop-types';

class WelcomeScreen extends Component {
  render() {
    return (
      <div>Hello {this.props.name} !</div>
    );
  }
}

export default WelcomeScreen;


WelcomeScreen.propTypes = {
  name: PropTypes.string.isRequired,
};
