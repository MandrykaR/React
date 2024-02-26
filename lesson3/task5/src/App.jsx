import Profile from './Profile.jsx'

import React from 'react'

const userData = {
	firstName: 'James',
	lastName: 'Bond',
	birthDate: '1991-01-17T11:11:11.819Z',
	birthPlace: 'London',
}

const App = () => {
	return <Profile user={userData} />
}

export default App
