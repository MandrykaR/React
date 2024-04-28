import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
	const { user_id } = useParams()
	const [userData, setUserData] = useState(null)

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await fetch(`https://api.github.com/users/${user_id}`)
				if (response.ok) {
					const userData = await response.json()
					setUserData(userData)
				} else {
					throw new Error('Failed to fetch user data')
				}
			} catch (error) {
				console.error(error)
			}
		}

		fetchUserData()

		return () => {
			setUserData(null)
		}
	}, [user_id])

	return (
		<div className='user'>
			{userData ? (
				<>
					<img
						alt='User Avatar'
						src={userData.avatar_url}
						className='user__avatar'
					/>
					<div className='user__info'>
						<span className='user__name'>{userData.login}</span>
						<span className='user__location'>{userData.location}</span>
					</div>
				</>
			) : (
				<span>Loading...</span>
			)}
		</div>
	)
}

export default User
