import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'


class GuessField extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.makeGuess(this.state)
	}

	handleChange = (event) => {
    this.setState({
      guess: event.target.value
    })
  }

	render() {
		const initialValues = this.props.initialValues || {}
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="guess">Guess</label>
					<input name="guess" id="guess" value={
						this.state.guess || initialValues.guess || ''
					} onChange={ this.handleChange } />
				</div>


				<button type="submit">Guess</button>
			</form>
		)
	}
}

export default connect(null, { makeGuess })(GuessField)
