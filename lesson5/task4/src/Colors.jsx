import React, { Component } from 'react'

class Colors extends Component {
	constructor(props) {
		super(props)
		this.state = {
			backgroundColor: '',
		}
	}

	onSwitchColor = color => {
		this.setState({ backgroundColor: color }, () => {
			document.body.style.backgroundColor = this.state.backgroundColor
		})
	}

	render() {
		return (
			<div className='colors'>
				<button
					className='colors__button'
					onClick={() => this.onSwitchColor('red')}
				></button>
				<button
					className='colors__button'
					onClick={() => this.onSwitchColor('green')}
				></button>
				<button
					className='colors__button'
					onClick={() => this.onSwitchColor('blue')}
				></button>
			</div>
		)
	}
}

export default Colors
