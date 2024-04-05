import React from 'react'
import UserForm from './userForm.jsx'

const Profile = ({ userData, handleChange }) => {
	return (
		<div className='column'>
			<UserForm userData={userData} handleChange={handleChange} />
		</div>
	)
}

export default Profile
