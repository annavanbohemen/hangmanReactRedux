import React, { Component } from 'react';
import './App.css';
import GuessField from './components/guessfield.js'
import GuessesList from './containers/guesseslist.js'
import GameProgress from './components/gameprogress.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      <style>
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');
    </style>
        <header className="App-header">
          <img src='images/hangman.png' className="App-logo" alt="logo" />
          <h1 className="title">HANGMAN</h1>
        </header>
        <p className="App-intro">
          Don&apos;t find yourself on the gallows!<br/>
          Guess the word and you will be fine.<br/>
          To many wrong guesses and you will be hanged!</p>
        <GameProgress />
        < GuessesList />
        < GuessField />
      </div>
    );
  }
}

export default App;
