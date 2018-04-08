import { MAKE_GUESS } from '../actions/game'

const word = "codaisseur"

export default function(state = [], action = {}) {
  switch(action.type) {
    case MAKE_GUESS :
      return state.concat(action.payload.guess);
    default :
      return state
  }
}
