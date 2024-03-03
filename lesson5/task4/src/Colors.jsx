import React, { Component } from 'react'

const RED = '#f00'
const GREEN = '#0f0'
const BLUE = '#00f'

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
					style={{ backgroundColor: RED }}
					className='colors__button'
					onClick={() => this.onSwitchColor(RED)}
				></button>
				<button
					style={{ backgroundColor: GREEN }}
					className='colors__button'
					onClick={() => this.onSwitchColor(GREEN)}
				></button>
				<button
					style={{ backgroundColor: BLUE }}
					className='colors__button'
					onClick={() => this.onSwitchColor(BLUE)}
				></button>
			</div>
		)
	}
}

export default Colors
