import React from 'react'
import Greeting from './Greeting.jsx'
import Login from './Login.jsx'
import Logout from './Logout.jsx'

class Auth extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoggedIn: false,
		}
	}

	onLogin = () => {
		this.setState({
			isLoggedIn: true,
		})
	}

	onLogout = () => {
		this.setState({
			isLoggedIn: false,
		})
	}

	render() {
		return (
			<div className='panel'>
				<Greeting isLoggedIn={this.state.isLoggedIn} />
				{<Logout onLogout={this.state.onLogout} /> ? <Login onLogin ={this.state.onLogin}/> : <Logout onLogout={this.state.onLogout}/>}
			</div>
		)
	}
}

export default Auth
