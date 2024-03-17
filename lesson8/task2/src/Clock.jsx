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
		this.updateOffset()
	}

	componentWillUnmount() {
		clearTimeout(this.timerID)
	}

	updateOffset = () => {
		this.setState(
			prevState => ({
				offset: new Date(prevState.offset.getTime() + 1000), 
			}),() => {
				this.timerID = setTimeout(this.updateOffset, 1000) 
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
