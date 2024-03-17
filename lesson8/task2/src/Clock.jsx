import React, { Component } from 'react'

class Clock extends Component {
	constructor(props) {
		super(props)

		this.state = {
			location: props.location,
		}
	}

	componentDidMount() {
		this.updateTime()
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	updateTime = () => {
		const { offset } = this.props
		const localTime = new Date()
		const utcTime = localTime.getTime() + localTime.getTimezoneOffset() * 60000
		const plTime = new Date(utcTime + 3600000 * offset)

		this.setState({
			offsetTime: plTime,
		})

		this.interval = setInterval(() => {
			this.setState(prevState => ({
				offsetTime: new Date(prevState.offsetTime.getTime() + 1000),
			}))
		}, 1000)
	}

	render() {
		return (
			<div className='clock'>
				<div className='clock__location'>{this.state.location}</div>
				<div className='clock__time'>
					{this.state.offsetTime && this.state.offsetTime.toLocaleTimeString()}
				</div>
			</div>
		)
	}
}

export default Clock
