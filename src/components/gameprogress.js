import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import './gameprogress.css';


const word = "codaisseur"

class GameProgress extends PureComponent {

showGuess() {
    const guess = this.props.guesses
    const showWord = []
    const letters = word.split("");

    letters.filter(function(letter){
      if(guess.indexOf(letter) > -1) {
        return showWord.push(letter)
      }
      else showWord.push('_')
    })
    showWord.join(' ');
    return showWord;
  }


  wrongGuessCount() {
    const guess = this.props.guesses

    return guess.reduce(function(total, guess) {
       if (word.indexOf(guess) === -1) return total + 1
       return total
    }, 0)
  }

render() {

  return(
    <div className="gamefield">
    <p className= "gameword"> {this.showGuess()} </p>
    </div>
  )
}
}

function mapStateToProps(state){
  return {
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(GameProgress)
