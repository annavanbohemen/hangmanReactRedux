import React, { PureComponent } from 'react'
import { connect } from 'react-redux'



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
        <ul>
        hallo
          {this.createGuessList()}
        </ul>
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
