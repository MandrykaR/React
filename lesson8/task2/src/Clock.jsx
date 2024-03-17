import React, { Component } from 'react'

class Clock extends Component {
	constructor(props) {
		super(props)

		this.state = {
			offset: this.calculateOffset(),
			location: props.location,
		}
	}

	componentDidMount() {
		this.updateOffset()
	}

	componentWillUnmount() {
		clearTimeout(this.interval)
	}

	calculateOffset = () => {
		const now = new Date()
		const utcOffset = now.getTimezoneOffset() / 60
		const plOffset = 1

		return new Date(now.getTime() + (utcOffset + plOffset) * 3600000)
	}

	updateOffset = () => {
		this.setState(
			prevState => ({
				offset: new Date(prevState.offset.getTime() + 1000),
			}),
			() => {
				this.interval = setTimeout(this.updateOffset, 1000)
			}
		)
	}

	render() {
		return (
			<div className='clock'>
				<div className='clock__location'>{this.state.location}</div>
				<div className='clock__time'>
					{this.state.offset.toLocaleTimeString()}
				</div>
			</div>
		)
	}
}

export default Clock
