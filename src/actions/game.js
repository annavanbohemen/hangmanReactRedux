export const MAKE_GUESS = 'MAKE_GUESS'

export const makeGuess = ( guess ) => {
  return {
    type: MAKE_GUESS,
    payload: guess
  }
}
