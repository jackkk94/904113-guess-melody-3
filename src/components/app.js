// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import WelcomeScreen from './welcome-screen';

class App extends Component {
  render() {
    return (
      // eslint-disable-next-line react/prop-types
      <WelcomeScreen name={this.props.name} />
    );
  }
}

export default App;
