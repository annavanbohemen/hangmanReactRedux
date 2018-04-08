import { MAKE_GUESS } from '../actions/game'

const newGame = {
  word: "codaisseur",
  guesses: []
}

export default function(state = newGame, action = {}) {
  switch(action.type) {
    case MAKE_GUESS :
      return [].concat(action.payload)
    default :
      return state
  }
}
