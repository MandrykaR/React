import React from 'react'

class ConnectionStatus extends React.Component {
	state = {
		status: navigator.onLine,
	}

	componentDidMount() {
		window.addEventListener('online', this.onOnline)
		window.addEventListener('offline', this.onOffline)
	}

	componentWillUnmount() {
		window.removeEventListener('online', this.onOnline)
		window.removeEventListener('offline', this.onOffline)
	}

	onOnline = () => {
		this.setState({
			status: true,
		})
	}

	onOffline = () => {
		this.setState({
			status: false,
		})
	}

	render() {
		return (
			<div className={`status ${this.state.status ? '' : 'status_offline'}`}>
				{this.state.status ? 'online' : 'offline'}
			</div>
		)
	}
}

export default ConnectionStatus
