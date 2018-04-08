import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class Guesses extends PureComponent {

  render() {
    return(
      <div>
        <div>_ _ _ _ _ </div>
        <div>a, b, c</div>
      </div>
    )
  }
}

export default connect(null, { })(Guesses)
