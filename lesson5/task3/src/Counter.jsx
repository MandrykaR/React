import React from 'react'

class Counter extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			counter: 0,
		}
	}

	decrease = () => {
		this.setState({
			counter: this.state.counter - 1,
		})
	}

	increase = () => {
		this.setState({
			counter: this.state.counter + 1,
		})
	}

	render() {
		return (
			<div className='counter'>
				<button
					onClick={this.decrease}
					data-action='decrease'
					className='counter__button'
				>
					-
				</button>
				<span className='counter__value'>{this.state.counter}</span>
				<button
					onClick={this.increase}
					data-action='increase'
					className='counter__button'
				>
					+
				</button>
			</div>
		)
	}
}

export default Counter
