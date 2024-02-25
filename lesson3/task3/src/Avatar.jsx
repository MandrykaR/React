import React from 'react'

const Avatar = ({ avatarUrl, name }) => {
	return <img className='avatar' src={avatarUrl} alt={name} />
}

export default Avatar
