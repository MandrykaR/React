import React, { Component } from 'react'

class Toggler extends Component {
	constructor(props) {
		super(props)

		this.state = {
			text: 'Off',
		}
	}

	onToggleText = () => {
		this.setState({
			text: this.state.text === 'On' ? 'Off' : 'On',
		})
	}

	render() {
		return (
			<div onClick={this.onToggleText} className='toggler'>
				{this.state.text}
			</div>
		)
	}
}

export default Toggler
