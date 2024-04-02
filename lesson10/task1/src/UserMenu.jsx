import React from 'react'

const UserMenu = ({ userData }) => {
	if (!userData) {
		return null
	}

	const { name, avatar_url } = userData
	return (
		<div class='menu'>
			<span class='menu__greeting'>{name} </span>
			<img alt='User Avatar' src={avatar_url} class='menu__avatar' />
		</div>
	)
}

export default UserMenu
