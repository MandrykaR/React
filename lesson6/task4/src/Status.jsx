import React from 'react'
import Online from './Online.jsx'
import Offline from './Offline.jsx'

class Status extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isOnline: true,
		}
	}

	statusSwitcher = () => {
		this.setState({
			isOnline: !this.state.isOnline,
		})
	}

	render() {
		return (
			<div className='status'>
				{this.props.isOnline ? (
					<Online />
				) : (
					<Offline onReconnect={this.statusSwitcher} />
				)}
			</div>
		)
	}
}

export default Status
