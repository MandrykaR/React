import React from 'react'

class ConnectionStatus extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOnline: navigator.onLine,
		}
	}

	componentDidMount() {
		const handleOnlineStatusChange = () => {
			this.setState({ isOnline: navigator.onLine })
		}

		window.addEventListener('online', handleOnlineStatusChange)
		window.addEventListener('offline', handleOnlineStatusChange)

		this.cleanup = () => {
			window.removeEventListener('online', handleOnlineStatusChange)
			window.removeEventListener('offline', handleOnlineStatusChange)
		}
	}

	componentWillUnmount() {
		this.cleanup()
	}

	render() {
		return (
			<div>
				{this.state.isOnline ? (
					<div class='status'>Online</div>
				) : (
					<div class='status status_offline'>Offline</div>
				)}
			</div>
		)
	}
}

export default ConnectionStatus
