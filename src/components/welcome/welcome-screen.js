import React, {Component} from 'react';
import PropTypes from 'prop-types';

class WelcomeScreen extends Component {
  render() {
    return (
      <section className="welcome">
        <div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
        <button onClick={this.props.onButtonClick} className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
        <h2 className="welcome__rules-title">Правила игры</h2>
        <p className="welcome__text">Правила просты:</p>
        <ul className="welcome__rules-list">
          <li>Нужно ответить на все вопросы.</li>
          <li>Можно допустить  {this.props.name} ошибки.</li>
        </ul>
        <p className="welcome__text">Удачи!</p>
      </section>
    );
  }
}

export default WelcomeScreen;


WelcomeScreen.propTypes = {
  name: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired
};
