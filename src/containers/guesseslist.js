import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './guesseslist.css';



class GuessesList extends PureComponent {

  createGuessList() {
    console.log(this.props.guesses);
    return this.props.guesses.map((letter) => {
      return (
        <li key={letter}>{letter}</li>
      )
    })
  }

  render() {
    return(
      <div className="guesslist">
        <ul>
        <li>Guessed Letters</li>
          {this.createGuessList()}
        </ul>
        </div>
      )
    }
}

function mapStateToProps(state){
  console.log(state);
  return {
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(GuessesList)
