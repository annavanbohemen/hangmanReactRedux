import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//import guessesList from './container/guessesList.js'

export class Guesses extends PureComponent {


  render() {
    return(
      <div>
        <div>_ _ _ _ _ </div>

      </div>
    )
  }
}


export default connect(null, { })(Guesses)
