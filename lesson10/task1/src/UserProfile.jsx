import React from 'react'

class UserProfile extends React.Component {
	render() {
		if (!this.props.userData) {
			return null
		}
		const { name, location, avatar_url } = this.props.userData
		return (
			<div class='user'>
				<img alt='User Avatar' src={avatar_url} class='user__avatar' />
				<div class='user__info'>
					<span class='user__name'>{name}</span>
					<span class='user__location'>{location}</span>
				</div>
			</div>
		)
	}
}

export default UserProfile
