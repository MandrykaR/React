import React, { Component } from 'react'

class Clock extends Component {
	constructor(props) {
		super(props)

		this.state = {
			offset: new Date(new Date().getTime() + props.offset * 3600000),
			location: props.location,
		}
	}

	componentDidMount() {
		this.interval = setTimeout(() => {
			this.setState(prevState => ({
				offset: new Date(prevState.offset.getTime() + 1000),
			}))
		}, 1000)
	}

	componentWillUnmount() {
		clearTimeout(this.interval)
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
