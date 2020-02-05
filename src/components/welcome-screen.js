// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';

class WelcomeScreen extends Component {
  render() {
    return (
    // eslint-disable-next-line react/prop-types
      <div>Hello {this.props.name} !</div>
    );
  }
}

export default WelcomeScreen;
