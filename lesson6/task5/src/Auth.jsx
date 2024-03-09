import React from 'react'
import Login from './Login.jsx'
import Logout from './Logout.jsx'
import Spinner from './Spinner.jsx'

class Auth extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isLogin: false,
			showSpinner: false,
		}
	}

	handleLogin = () => {
		this.setState({
			showSpinner: true,
		})
		setTimeout(() => {
			this.setState({
				isLogin: true,
				showSpinner: false,
			})
		}, 2000)
	}

	handleLogout = () => {
		this.setState({
			isLogin: false,
		})
	}

	render() {
		const { isLogin, showSpinner } = this.state
		return (
			<div>
				{isLogin ? (
					<Logout onLogout={this.handleLogout} />
				) : (
					<>
						{showSpinner ? (
							<Spinner size='40px' />
						) : (
							<Login onLogin={this.handleLogin} />
						)}
					</>
				)}
			</div>
		)
	}
}

export default Auth
