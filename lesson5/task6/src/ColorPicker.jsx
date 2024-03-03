import React, { Component } from 'react'

const CORAL = '#ff7f50'
const AQUA = '#00ffff'
const BISQUE = '#ffe4c4'

class ColorPicker extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: 'COLOR',
		}
	}

	handleMouseEnter = color => {
		this.setState({ title: color.toUpperCase() })
	}

	handleMouseLeave = () => {
		this.setState({ title: '' })
	}

	render() {
		return (
			<div>
				<div className='picker__title'>{this.state.title}</div>
				<div>
					<button
						style={{ backgroundColor: CORAL }}
						className='picker__button picker__button_coral'
						onMouseEnter={() => this.handleMouseEnter('coral')}
						onMouseLeave={this.handleMouseLeave}
					></button>
					<button
						style={{ backgroundColor: AQUA }}
						className='picker__button picker__button_aqua'
						onMouseEnter={() => this.handleMouseEnter('aqua')}
						onMouseLeave={this.handleMouseLeave}
					></button>
					<button
						style={{ backgroundColor: BISQUE }}
						className='picker__button picker__button_bisque'
						onMouseEnter={() => this.handleMouseEnter('bisque')}
						onMouseLeave={this.handleMouseLeave}
					></button>
				</div>
			</div>
		)
	}
}

export default ColorPicker
