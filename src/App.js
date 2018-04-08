import React, { Component } from 'react';
import './App.css';
import GuessField from './components/guessfield.js'
import Guesses from './components/guesses.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='./public/hangmangallow.svg' className="App-logo" alt="logo" />
          <h1 className="title">HANGMAN</h1>
        </header>
        <p className="App-intro">
          Guess the word and you will be fine. To many wrong guesses and you will be hanged!
        </p>
        < Guesses />
        < GuessField />
      </div>
    );
  }
}

export default App;
