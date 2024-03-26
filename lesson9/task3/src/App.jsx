import React from 'react'
import UserForm from './UserForm'

class App extends React.Component {
	handleSubmit = formData => {
		this.createUser(formData)
	}

	createUser = userData => {
		console.log('User Data:', userData)
	}

	render() {
		return (
			<div>
				<UserForm onSubmit={this.handleSubmit} />
			</div>
		)
	}
}

export default App
