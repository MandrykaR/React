import React, { Component } from 'react'

class ConnectionStatus extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOnline: navigator.onLine,
		}
	}

	componentDidMount() {
		window.addEventListener('online', this.handleOnlineStatusChange)
		window.addEventListener('offline', this.handleOnlineStatusChange)
	}

	componentWillUnmount() {
		window.removeEventListener('online', this.handleOnlineStatusChange)
		window.removeEventListener('offline', this.handleOnlineStatusChange)
	}

	handleOnlineStatusChange = () => {
		this.setState({ isOnline: navigator.onLine })
	}

	render() {
		return (
			<div className={`status ${this.state.isOnline ? '' : 'status_offline'}`}>
				{this.state.isOnline ? 'online' : 'offline'}
			</div>
		)
	}
}

export default ConnectionStatus
