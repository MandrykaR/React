import React from 'react'
import UserProfile from './UserProfile.jsx'
import UserMenu from './UserMenu.jsx'

class Page extends React.Component {
	state = {
		userData: null,
	}

	componentDidMount() {
		const { userId } = this.props
		this.fetchUserData(userId)
	}

	fetchUserData = userId => {
		const userUrl = `https://api.github.com/users/${userId}`
		fetch(userUrl)
			.then(res => res.json())
			.then(userData => {
				this.setState({
					userData,
				})
			})
	}

	render() {
		const { userData } = this.state

		return (
			<div className='page'>
				<header className='header'>
					<UserMenu userData={userData} />
				</header>
				<UserProfile userData={userData} />
			</div>
		)
	}
}

export default Page
