import Greeting from './Greeting.jsx'

import React from 'react'

const App = () => {
	const birthDay = new Date(2001, 8, 6)
	return <Greeting firstName={'John'} lastName='Doe' birthDate={birthDay} />
}

export default App
